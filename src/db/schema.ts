import { z } from "zod";

export const playerSchema = z.object({
  playerId: z.number(),
  skaterFullName: z.string(),
  lastName: z.string(),
  teamAbbrevs: z.string(),
  gamesPlayed: z.number(),
  points: z.number(),
  goals: z.number(),
  assists: z.number(),
  evGoals: z.number(),
  evPoints: z.number(),
  faceoffWinPct: z.number(),
  gameWinningGoals: z.number(),
  otGoals: z.number(),
  penaltyMinutes: z.number(),
  plusMinus: z.number(),
  pointsPerGame: z.number(),
  positionCode: z.string(),
  ppGoals: z.number(),
  ppPoints: z.number(),
  seasonId: z.number(),
  shGoals: z.number(),
  shPoints: z.number(),
  shootingPct: z.number(),
  shootsCatches: z.string(),
  shots: z.number(),
  timeOnIcePerGame: z.string(),
  timeOnIcePerGameSec: z.number(),
  goalsPerGame: z.number(),
  shotsPerGame: z.number(),
  pointProbability: z.number(),
  goalProbability: z.number(),
  twoPointProbability: z.number(),
  twoGoalProbability: z.number(),
  targetPoints: z.number(),
  targetGoals: z.number(),
  pointsLast5: z.number(),
  goalsLast5: z.number(),
  assistsLast5: z.number(),
  shotsLast5: z.number(),
  shotsPerGameLast5: z.number(),
  TOIperGameLast5Sec: z.number(),
  TOIperGameLast5: z.string(),
  pointProbabilityLast5: z.number(),
  goalProbabilityLast5: z.number(),
  twoPointProbabilityLast5: z.number(),
  twoGoalProbabilityLast5: z.number(),
});

export type PlayerType = z.infer<typeof playerSchema>;

export type PlayerFieldTextType = {
  field_id: string;
  field_text: string;
  field_tooltip: string;
}[];

const playerFieldText: PlayerFieldTextType = [
  {
    field_id: "skaterFullName",
    field_text: "Player",
    field_tooltip: "Player's full name",
  },
  { field_id: "seasonId", 
    field_text: "Season", 
    field_tooltip: "Season ID" 
  },
  {
    field_id: "teamAbbrevs",
    field_text: "Team",
    field_tooltip: "Team Abbreviation",
  },
  { field_id: "gamesPlayed", 
    field_text: "GP", 
    field_tooltip: "Games Played" 
  },

  { field_id: "points", 
    field_text: "P", 
    field_tooltip: "Points" 
  },
  { field_id: "goals", 
    field_text: "G", 
    field_tooltip: "Goals" 
  },
  { field_id: "assists", 
    field_text: "A", 
    field_tooltip: "Assists" 
  },
  { field_id: "plusMinus", 
    field_text: "+/-", 
    field_tooltip: "Plus/Minus" 
  },
  { field_id: "shots", 
    field_text: "S", 
    field_tooltip: "Shots" 
  },
  {
    field_id: "evGoals",
    field_text: "EVG",
    field_tooltip: "Even Strength Goals",
  },
  {
    field_id: "evPoints",
    field_text: "EVP",
    field_tooltip: "Even Strength Points",
  },
  {
    field_id: "faceoffWinPct",
    field_text: "FOW%",
    field_tooltip: "Faceoff Win Percentage",
  },
  {
    field_id: "gameWinningGoals",
    field_text: "GWG",
    field_tooltip: "Game Winning Goals",
  },
  { field_id: "otGoals", 
    field_text: "OTG", 
    field_tooltip: "Overtime Goals" 
  },
  {
    field_id: "penaltyMinutes",
    field_text: "PIM",
    field_tooltip: "Penalty Minutes",
  },
  {
    field_id: "pointsPerGame",
    field_text: "P/PG",
    field_tooltip: "Points Per Game",
  },
  {
    field_id: "positionCode",
    field_text: "POS",
    field_tooltip: "Position",
  },
  { field_id: "ppGoals", 
    field_text: "PPG", 
    field_tooltip: "Power Play Goals" 
  },
  {
    field_id: "ppPoints",
    field_text: "PPP",
    field_tooltip: "Power Play Points",
  },
  {
    field_id: "shGoals",
    field_text: "SHG",
    field_tooltip: "Short Handed Goals",
  },
  {
    field_id: "shPoints",
    field_text: "SHP",
    field_tooltip: "Short Handed Points",
  },
  {
    field_id: "shootingPct",
    field_text: "S%",
    field_tooltip: "Shooting Percentage",
  },
  {
    field_id: "shootsCatches",
    field_text: "SC",
    field_tooltip: "Shoots/Catches",
  },
  {
    field_id: "timeOnIcePerGame",
    field_text: "TOI/GP",
    field_tooltip: "Time On Ice Per Game",
  },
  {
    field_id: "goalsPerGame",
    field_text: "G/GP",
    field_tooltip: "Goals Per Game",
  },
  {
    field_id: "shotsPerGame",
    field_text: "S/GP",
    field_tooltip: "Shots Per Game",
  },
  {
    field_id: "pointProbability",
    field_text: "P/GP%",
    field_tooltip: "Point Probability",
  },
  {
    field_id: "goalProbability",
    field_text: "G/GP%",
    field_tooltip: "Goal Probability",
  },
  {
    field_id: "twoPointProbability",
    field_text: "2P/GP%",
    field_tooltip: "Two Point Probability",
  },
  {
    field_id: "twoGoalProbability",
    field_text: "2G/GP%",
    field_tooltip: "Two Goal Probability",
  },
  {
    field_id: "targetPoints",
    field_text: "TP",
    field_tooltip: "Target Points",
  },
  { field_id: "targetGoals", 
    field_text: "TG", 
    field_tooltip: "Target Goals" 
  },
  {
    field_id: "pointsLast5",
    field_text: "P5GP",
    field_tooltip: "Points Last 5 Games",
  },
  {
    field_id: "goalsLast5",
    field_text: "G5GP",
    field_tooltip: "Goals Last 5 Games",
  },
  {
    field_id: "assistsLast5",
    field_text: "A5GP",
    field_tooltip: "Assists Last 5 Games",
  },
  {
    field_id: "shotsLast5",
    field_text: "S5GP",
    field_tooltip: "Shots Last 5 Games",
  },
  {
    field_id: "shotsPerGameLast5",
    field_text: "S/5GP",
    field_tooltip: "Shots Per Game Last 5 Games",
  },
  {
    field_id: "TOIperGameLast5",
    field_text: "TOI/5GP",
    field_tooltip: "Time On Ice Per Game Last 5 Games",
  },
  {
    field_id: "pointProbabilityLast5",
    field_text: "P/5GP%",
    field_tooltip: "Point Probability Last 5 Games",
  },
  {
    field_id: "goalProbabilityLast5",
    field_text: "G/5GP%",
    field_tooltip: "Goal Probability Last 5 Games",
  },
  {
    field_id: "twoPointProbabilityLast5",
    field_text: "2P/5GP%",
    field_tooltip: "Two Point Probability Last 5 Games",
  },
  {
    field_id: "twoGoalProbabilityLast5",
    field_text: "2G/5GP%",
    field_tooltip: "Two Goal Probability Last 5 Games",
  },
];

export function getPlayerFieldText(field_id: string) {
  return playerFieldText.find((field) => field.field_id === field_id)?.field_text || field_id;
}

export function getPlayerFieldTooltip(field_id: string) {
  return playerFieldText.find((field) => field.field_id === field_id)?.field_tooltip || field_id;
}