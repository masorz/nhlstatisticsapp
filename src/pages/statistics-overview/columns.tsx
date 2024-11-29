import { ColumnDef } from "@tanstack/react-table";

import { PlayerType } from "../../db/schema";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<PlayerType>[] = [
  {
    accessorKey: "skaterFullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "seasonId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "teamAbbrevs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "gamesPlayed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "points",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "goals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "assists",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "plusMinus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shots",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "evGoals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "evPoints",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "faceoffWinPct",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "gameWinningGoals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "otGoals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "penaltyMinutes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "pointsPerGame",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "goalsPerGame",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },  
  {
    accessorKey: "positionCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "ppGoals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "ppPoints",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shGoals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shPoints",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shootingPct",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shootsCatches",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "timeOnIcePerGame",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shotsPerGame",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "pointProbability",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "goalProbability",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "twoPointProbability",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "twoGoalProbability",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "targetPoints",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "targetGoals",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "pointsLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "goalsLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "assistsLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shotsLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "shotsPerGameLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "TOIperGameLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "pointProbabilityLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "goalProbabilityLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "twoPointProbabilityLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
  {
    accessorKey: "twoGoalProbabilityLast5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} />
    ),
  },
];
