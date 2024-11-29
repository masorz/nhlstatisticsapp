import { useEffect, useState } from "react";
import { PlayerType } from "../../db/schema";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import skaters_stats from "../../../skaters_stats.json"

async function getData(): Promise<PlayerType[]> {
  return skaters_stats.data.map((item: any) => ({
    ...item,
    faceoffWinPct: ((item.faceoffWinPct ?? 0) * 100).toFixed(2)
}));  
}

export default function SkatersStatisticsPage() {
  const [skaterStatsData, setSkaterData] = useState<PlayerType[]>([]);
  useEffect(() => {
    const data = async () => {
      const result = await getData();
      setSkaterData(result);
    };
    data();
  }, []);
  return <DataTable columns={columns} data={skaterStatsData} />;
}