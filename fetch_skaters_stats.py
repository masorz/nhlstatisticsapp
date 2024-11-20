from nhlpy.api.query.builder import QueryBuilder, QueryContext
from nhlpy.nhl_client import NHLClient
from nhlpy.api.query.filters.draft import DraftQuery
from nhlpy.api.query.filters.season import SeasonQuery
from nhlpy.api.query.filters.game_type import GameTypeQuery
from nhlpy.api.query.filters.position import PositionQuery, PositionTypes
import json

regular_season = "2"
scheduled_games_count = 82


def get_game_log(player_id, season_id):
    """Retrieve and sort the game log for a player by game date."""
    game_log = client.stats.player_game_log(
        player_id=player_id, season_id=season_id, game_type=regular_season
    )
    return sorted(game_log, key=lambda x: x["gameDate"], reverse=True)


def calculate_last_5_games_stats(last_5_games):
    """Calculates statistics for the last 5 games played by a player."""
    points_last_5 = sum(game["points"] for game in last_5_games)
    goals_last_5 = sum(game["goals"] for game in last_5_games)
    assists_last_5 = sum(game["assists"] for game in last_5_games)
    shots_last_5 = sum(game["shots"] for game in last_5_games)
    toi_last_5_total = sum(
        int(game["toi"].split(":")[0]) * 60 + int(game["toi"].split(":")[1])
        for game in last_5_games
    )
    toi_per_game_last_5 = (
        toi_last_5_total / len(last_5_games) if len(last_5_games) > 0 else 0
    )

    shots_per_game_last_5 = (
        round(shots_last_5 / len(last_5_games), 2) if len(last_5_games) > 0 else 0
    )

    return {
        "points_last_5": points_last_5,
        "goals_last_5": goals_last_5,
        "assists_last_5": assists_last_5,
        "shots_last_5": shots_last_5,
        "shots_per_game_last_5": shots_per_game_last_5,
        "toi_per_game_last_5": toi_per_game_last_5,
    }


def calculate_scoring_probabilites(game_log, total_games, score_threshold):
    """Calculates the probability of scoring points or goals."""
    games_with_points = sum(1 for game in game_log if game["points"] >= score_threshold)
    games_with_goals = sum(1 for game in game_log if game["goals"] >= score_threshold)
    prob_points = (
        round((games_with_points / total_games) * 100, 2) if total_games > 0 else 0
    )
    prob_goals = (
        round((games_with_goals / total_games) * 100, 2) if total_games > 0 else 0
    )

    return {
        "prob_points": prob_points,
        "prob_goals": prob_goals,
    }


def calculate_probabilities(game_log, total_games):
    """Calculates the probability of scoring points or goals for a player."""
    score1_prob = calculate_scoring_probabilites(game_log, total_games, 1)
    score2_prob = calculate_scoring_probabilites(game_log, total_games, 2)
    return {
        "prob_point": score1_prob["prob_points"],
        "prob_goal": score1_prob["prob_goals"],
        "prob_2point": score2_prob["prob_points"],
        "prob_2goal": score2_prob["prob_goals"],
    }


def calculate_last_5_probabilities(last_5_games):
    """Calculates the probability of scoring points or goals for the last 5 games played by a player."""
    score1_prob = calculate_scoring_probabilites(last_5_games, len(last_5_games), 1)
    score2_prob = calculate_scoring_probabilites(last_5_games, len(last_5_games), 2)

    return {
        "prob_point_last_5": score1_prob["prob_points"],
        "prob_goal_last_5": score1_prob["prob_goals"],
        "prob_2point_last_5": score2_prob["prob_points"],
        "prob_2goal_last_5": score2_prob["prob_goals"],
    }


def convert_toi_to_str(toi_seconds):
    """Converts time on ice from seconds to a formatted string (MM:SS)."""
    toi_min = toi_seconds // 60
    toi_sec = toi_seconds % 60
    return f"{int(toi_min)}:{int(toi_sec):02d}"


def calculate_new_statistics(player, season_id):
    """Calculates new statistics for a player."""
    player_id = player["playerId"]
    total_games = player["gamesPlayed"]

    # Get and sort game log for the player
    game_log = get_game_log(player_id, season_id)

    # Calculate statistics for the last 5 games
    last_5_games = game_log[:5]
    last_5_stats = calculate_last_5_games_stats(last_5_games)

    # Calculate probabilities
    probabilities = calculate_probabilities(game_log, total_games)
    last_5_probabilities = calculate_last_5_probabilities(last_5_games)

    # Calculate shots per game
    shots_per_game = round(player["shots"] / total_games, 2) if total_games > 0 else 0

    # Convert timeOnIcePerGame from seconds to minutes and seconds
    toi_per_game = round(player["timeOnIcePerGame"], 2)
    player["timeOnIcePerGame"] = convert_toi_to_str(player["timeOnIcePerGame"])

    # calculate goals per game
    goals_per_game = round(player["goals"] / total_games, 2) if total_games > 0 else 0

    # Calculate target points
    target_points = round(player["pointsPerGame"] * scheduled_games_count, 2)
    target_goals = round(goals_per_game * scheduled_games_count, 2)

    # Calculate shooting percentage
    shooting_percentage = 0.00
    if player["shootingPct"] is not None and player["shootingPct"] != "null":
        shooting_percentage = round(player["shootingPct"] * 100, 2)

    return {
        "pointsPerGame": round(player["pointsPerGame"], 2),
        "shootingPct": shooting_percentage,
        "timeOnIcePerGameSec": toi_per_game,
        "goalsPerGame": goals_per_game,
        "shotsPerGame": shots_per_game,
        "pointProbability": probabilities["prob_point"],
        "goalProbability": probabilities["prob_goal"],
        "twoPointProbability": probabilities["prob_2point"],
        "twoGoalProbability": probabilities["prob_2goal"],
        "targetPoints": target_points,
        "targetGoals": target_goals,
        "pointsLast5": last_5_stats["points_last_5"],
        "goalsLast5": last_5_stats["goals_last_5"],
        "assistsLast5": last_5_stats["assists_last_5"],
        "shotsLast5": last_5_stats["shots_last_5"],
        "shotsPerGameLast5": last_5_stats["shots_per_game_last_5"],
        "TOIperGameLast5Sec": last_5_stats["toi_per_game_last_5"],
        "TOIperGameLast5": convert_toi_to_str(last_5_stats["toi_per_game_last_5"]),
        "pointProbabilityLast5": last_5_probabilities["prob_point_last_5"],
        "goalProbabilityLast5": last_5_probabilities["prob_goal_last_5"],
        "twoPointProbabilityLast5": last_5_probabilities["prob_2point_last_5"],
        "twoGoalProbabilityLast5": last_5_probabilities["prob_2goal_last_5"],
    }


def update_skaters_stats(skaters_stats, season_id):
    for player in skaters_stats["data"]:
        if player["gamesPlayed"] > 0:
            new_stats = calculate_new_statistics(player, season_id)
            player.update(new_stats)

            print(f"Updated statistics for {player['skaterFullName']}")
    return skaters_stats


client = NHLClient(verbose=True)

# Standings example
# standings = client.standings.get_standings()
# print(standings)


filters = [
    GameTypeQuery(game_type=regular_season),
    SeasonQuery(season_start="20242025", season_end="20242025"),
]

query_builder = QueryBuilder()
query_context: QueryContext = query_builder.build(filters=filters)

# skaters_stats = client.stats.skater_stats_with_query_context(
#     report_type="summary", query_context=query_context, aggregate=False, limit=800
# )
start = 0
limit = 100
skaters_stats = {"data": []}
iteration = 0

while True:
    response = client.stats.skater_stats_with_query_context(
        report_type="summary",
        query_context=query_context,
        aggregate=False,
        start=start,
        limit=limit,
    )
    if not response["data"]:
        break
    skaters_stats["data"].extend(response["data"])
    start += limit
    iteration += 1
    print(f"Iteration: {iteration}")

skaters_stats["total"] = len(skaters_stats["data"])

# Sort skaters_stats by points descending
skaters_stats["data"].sort(key=lambda x: x["points"], reverse=True)
print(f"Number of lines in updated_skaters_stats: {len(skaters_stats['data'])}")


with open("skaters_stats_summary.json", "w") as outfile:
    json.dump(skaters_stats, outfile, indent=4)

# Mock
skaters_stats_mock = {
    "data": [
        {
            "assists": 13,
            "evGoals": 2,
            "evPoints": 10,
            "faceoffWinPct": None,
            "gameWinningGoals": 1,
            "gamesPlayed": 9,
            "goals": 4,
            "lastName": "Stone",
            "otGoals": 0,
            "penaltyMinutes": 0,
            "playerId": 8475913,
            "plusMinus": 8,
            "points": 17,
            "pointsPerGame": 1.88888,
            "positionCode": "R",
            "ppGoals": 2,
            "ppPoints": 7,
            "seasonId": 20242025,
            "shGoals": 0,
            "shPoints": 0,
            "shootingPct": 0.21052,
            "shootsCatches": "R",
            "shots": 19,
            "skaterFullName": "Mark Stone",
            "teamAbbrevs": "VGK",
            "timeOnIcePerGame": 1168.8888,
        },
        {
            "assists": 9,
            "evGoals": 3,
            "evPoints": 10,
            "faceoffWinPct": None,
            "gameWinningGoals": 0,
            "gamesPlayed": 8,
            "goals": 6,
            "lastName": "Panarin",
            "otGoals": 0,
            "penaltyMinutes": 2,
            "playerId": 8478550,
            "plusMinus": 5,
            "points": 15,
            "pointsPerGame": 1.875,
            "positionCode": "L",
            "ppGoals": 3,
            "ppPoints": 5,
            "seasonId": 20242025,
            "shGoals": 0,
            "shPoints": 0,
            "shootingPct": 0.20689,
            "shootsCatches": "R",
            "shots": 29,
            "skaterFullName": "Artemi Panarin",
            "teamAbbrevs": "NYR",
            "timeOnIcePerGame": 1237.875,
        },
        {
            "assists": 2,
            "evGoals": 0,
            "evPoints": 2,
            "faceoffWinPct": 0.5,
            "gameWinningGoals": 0,
            "gamesPlayed": 4,
            "goals": 0,
            "lastName": "Helenius",
            "otGoals": 0,
            "penaltyMinutes": 7,
            "playerId": 8482726,
            "plusMinus": 1,
            "points": 2,
            "pointsPerGame": 0.5,
            "positionCode": "C",
            "ppGoals": 0,
            "ppPoints": 0,
            "seasonId": 20242025,
            "shGoals": 0,
            "shPoints": 0,
            "shootingPct": 0.0,
            "shootsCatches": "L",
            "shots": 4,
            "skaterFullName": "Samuel Helenius",
            "teamAbbrevs": "LAK",
            "timeOnIcePerGame": 621.5,
        },
        {
            "assists": 1,
            "evGoals": 0,
            "evPoints": 1,
            "faceoffWinPct": 0.4,
            "gameWinningGoals": 0,
            "gamesPlayed": 3,
            "goals": 0,
            "lastName": "Drouin",
            "otGoals": 0,
            "penaltyMinutes": 0,
            "playerId": 8477494,
            "plusMinus": -2,
            "points": 1,
            "pointsPerGame": 0.33333,
            "positionCode": "L",
            "ppGoals": 0,
            "ppPoints": 0,
            "seasonId": 20242025,
            "shGoals": 0,
            "shPoints": 0,
            "shootingPct": None,
            "shootsCatches": "L",
            "shots": 0,
            "skaterFullName": "Jonathan Drouin",
            "teamAbbrevs": "COL",
            "timeOnIcePerGame": 1191.6666,
        },
    ],
    "total": 4,
}

season_id = "20242025"
updated_skaters_stats = update_skaters_stats(skaters_stats, season_id)

# Sort skaters_stats by points descending
updated_skaters_stats["data"].sort(key=lambda x: x["points"], reverse=True)

# print(json.dumps(updated_skaters_stats, indent=4))
print(f"Number of lines in updated_skaters_stats: {len(updated_skaters_stats['data'])}")

# Save updated skaters stats to a file
with open("skaters_stats.json", "w") as outfile:
    json.dump(updated_skaters_stats, outfile, indent=4)
