from nhlpy.nhl_client import NHLClient

regular_season = "2"
samuel_helenius_id = 8482726
season_id = "20242025"

client = NHLClient(verbose=True)

game_log = client.stats.player_game_log(
    player_id=samuel_helenius_id, season_id=season_id, game_type=regular_season
)
