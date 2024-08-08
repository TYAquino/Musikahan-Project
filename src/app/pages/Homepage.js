"use client";
import React from "react";
import Sidebar from "../app/components/Sidebar";

export default function Homepage() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#14121F] to-[#5200FF] flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-indigo-500 rounded-lg shadow-lg">
        <Sidebar />
      </div>
    </div>
  );
}
