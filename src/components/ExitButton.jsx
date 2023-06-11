import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";
export default function ExitButton() {
  const { darkMode } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`flex flex-col items-center ${darkMode ? "text-blue-700" : "text-white"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <ImExit size={24} className=' cursor-pointer hover:scale-125  duration-700 ease-in-out' onClick={() => navigate("/")} />
      <p className={`text-xs my-2 font-semibold ${darkMode ? "text-blue-700" : "text-white"}`}>EXIT</p>
    </div>
  );
}
