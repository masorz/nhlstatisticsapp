import { Skater, columns } from "./columns";
import { DataTable } from "./data-table";
import skaters_stats from "../../skaters_stats.json"
 
function getData(): Skater[] {
    return skaters_stats.data.map((item: any) => ({
        ...item,
        faceoffWinPct: ((item.faceoffWinPct ?? 0) * 100).toFixed(2)
    }));
}
 
export default function SkatersStatisticsPage() {
  const data = getData();
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}