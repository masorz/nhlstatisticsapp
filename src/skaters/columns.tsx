"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
export type Skater = {
    playerId: number;
    skaterFullName: string;
    lastName: string; 
    teamAbbrevs: string;
    gamesPlayed: number;
    points: number;
    assists: number;
    goals: number;
    plusMinus: number;
    shots: number;
    evGoals: number;
    evPoints: number;
    faceoffWinPct: number;
    gameWinningGoals: number;
    otGoals: number;
    penaltyMinutes: number;
    pointsPerGame: number;
    positionCode: string;
    ppGoals: number;
    ppPoints: number;
    seasonId: number;
    shGoals: number;
    shPoints: number;
    shootingPct: number;
    shootsCatches: string;
    timeOnIcePerGame: string;
    timeOnIcePerGameSec: number;
    goalsPerGame: number;
    shotsPerGame: number;
    pointProbability: number;
    goalProbability: number;
    twoPointProbability: number;
    twoGoalProbability: number;
    targetPoints: number;
    targetGoals: number;
    pointsLast5: number;
    goalsLast5: number;
    assistsLast5: number;
    shotsLast5: number;
    shotsPerGameLast5: number;
    TOIperGameLast5Sec: number;
    TOIperGameLast5: string;
    pointProbabilityLast5: number;
    goalProbabilityLast5: number;
    twoPointProbabilityLast5: number;
    twoGoalProbabilityLast5: number;
};

export const columns: ColumnDef<Skater>[] = [
    {
        accessorKey: "playerId",
        header: "Player ID",
    },
    {
        accessorKey: "skaterFullName",
        header: "Full Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "teamAbbrevs",
        header: "Team",
    },
    {
        accessorKey: "gamesPlayed",
        header: "GP",
    },
    {
        accessorKey: "points",
        header: "P",
    },
    {
        accessorKey: "assists",
        header: "A",
    },
    {
        accessorKey: "goals",
        header: "G",
    },
    {
        accessorKey: "plusMinus",
        header: "+/-",
    },
    {
        accessorKey: "shots",
        header: "S",
    },
    {
        accessorKey: "evGoals",
        header: "EVG",
    },
    {
        accessorKey: "evPoints",
        header: "EVP",
    },
    {
        accessorKey: "faceoffWinPct",
        header: "FOW%",
    },
    {
        accessorKey: "gameWinningGoals",
        header: "GWG",
    },
    {
        accessorKey: "otGoals",
        header: "OTG",
    },
    {
        accessorKey: "penaltyMinutes",
        header: "PIM",
    },
    {
        accessorKey: "pointsPerGame",
        header: "P/PG",
    },
    {
        accessorKey: "positionCode",
        header: "POS",
    },
    {
        accessorKey: "ppGoals",
        header: "PPG",
    },
    {
        accessorKey: "ppPoints",
        header: "PPP",
    },
    {
        accessorKey: "seasonId",
        header: "Season ID",
    },
    {
        accessorKey: "shGoals",
        header: "SHG",
    },
    {
        accessorKey: "shPoints",
        header: "SHP",
    },
    {
        accessorKey: "shootingPct",
        header: "S%",
    },
    {
        accessorKey: "shootsCatches",
        header: "SC",
    },
    {
        accessorKey: "timeOnIcePerGame",
        header: "TOI/GP",
    },
    {
        accessorKey: "timeOnIcePerGameSec",
        header: "TOI/GP",
    },
    {
        accessorKey: "goalsPerGame",
        header: "G/GP",
    },
    {
        accessorKey: "shotsPerGame",
        header: "S/GP",
    },
    {
        accessorKey: "pointProbability",
        header: "P/GP %",
    },
    {
        accessorKey: "goalProbability",
        header: "G/GP %",
    },
    {
        accessorKey: "twoPointProbability",
        header: "2P/GP %",
    },
    {
        accessorKey: "twoGoalProbability",
        header: "2G/GP %",
    },
    {
        accessorKey: "targetPoints",
        header: "Target Points",
    },
    {
        accessorKey: "targetGoals",
        header: "Target Goals",
    },
    {
        accessorKey: "pointsLast5",
        header: "P5GP",
    },
    {
        accessorKey: "goalsLast5",
        header: "G5GP",
    },
    {
        accessorKey: "assistsLast5",
        header: "A5GP",
    },
    {
        accessorKey: "shotsLast5",
        header: "S5GP",
    },
    {
        accessorKey: "shotsPerGameLast5",
        header: "S/5GP",
    },
    {
        accessorKey: "TOIperGameLast5Sec",
        header: "TOI/5GP",
    },
    {
        accessorKey: "TOIperGameLast5",
        header: "TOI/5GP",
    },
    {
        accessorKey: "pointProbabilityLast5",
        header: "P/5GP %",
    },
    {
        accessorKey: "goalProbabilityLast5",
        header: "G/5GP %",
    },
    {
        accessorKey: "twoPointProbabilityLast5",
        header: "2P/5GP %",
    },
    {
        accessorKey: "twoGoalProbabilityLast5",
        header: "2G/5GP %",
    },
];
