import { useState } from "react";
import React from "react";
import Sidebar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import TextComparator from "./Components/TextComparator";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <TextComparator />
        </main>
      </div>
    </div>
  );
}
export default App;
