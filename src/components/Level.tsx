"use client";

import React, { useState } from "react";

type Level = {
  id: number;
  x: string;
  y: string;
  locked: boolean;
};

const GameLevels: React.FC = () => {
  const levels: Level[] = [
    { id: 1, x: "10%", y: "80%", locked: false },
    { id: 2, x: "30%", y: "65%", locked: false },
    { id: 3, x: "60%", y: "70%", locked: true },
    { id: 4, x: "80%", y: "50%", locked: true },
    { id: 5, x: "70%", y: "30%", locked: true },
    { id: 6, x: "40%", y: "20%", locked: true },
    { id: 7, x: "20%", y: "35%", locked: true },
    { id: 8, x: "5%", y: "50%", locked: true },
  ];


  return (
    <div
      className="relative w-full h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/game3.gif')" }}
    >
      <header className="flex items-center justify-start p-4 fixed top-0 left-0 right-0 z-10">
        <a
          href="/"
          className="flex items-center px-4 py-2 font-bold bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Буцах
        </a>
      </header>
      {/* SVG for lines */}
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {levels.map((level, index) => {
          // Skip the last level since it won't connect to another
          if (index === levels.length - 1) return null;

          // Get current and next level coordinates
          const currentLevel = levels[index];
          const nextLevel = levels[index + 1];

          return (
            <line
              key={index}
              x1={currentLevel.x}
              y1={currentLevel.y}
              x2={nextLevel.x}
              y2={nextLevel.y}
              stroke="#d1d5db"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Levels */}
      <div className="absolute w-full h-full">
        {levels.map((level) => (
          <a
            key={level.id}
            href={`/game/employee/play/level/${level.id}/1`}
            style={{ position: "absolute", top: level.y, left: level.x }}
            className={`flex items-center justify-center p-4 rounded-full w-16 h-16 cursor-pointer
              ${level.locked ? "bg-gray-400" : "bg-blue-500"} text-white shadow-md`}
           
          >
            {level.locked ? (
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                🔒
              </div>
            ) : (
              <span className="text-lg font-bold">{level.id}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default GameLevels;
