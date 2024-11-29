// // import { useEffect, useState } from "react";
// import "./App.css";
// import SkatersStatisticsPage from "./skaters/page";

// function App() {
//    return (
//      <main>
//        <h1 className="text-3xl font-bold underline">
//          NHL Player Statistics
//        </h1>
//        <SkatersStatisticsPage />
//      </main>
//    );
// }


// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import PlayerStatsPage from "./pages/statistics-overview/PlayerStatsPage";
import PageNotFound from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<PlayerStatsPage/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;

