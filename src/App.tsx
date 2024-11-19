// import { useEffect, useState } from "react";
import "./App.css";
import SkatersStatisticsPage from "./skaters/page";

function App() {
   return (
     <main>
       <h1 className="text-3xl font-bold underline">
         NHL Player Statistics
       </h1>
       <SkatersStatisticsPage />
     </main>
   );
}


export default App;
