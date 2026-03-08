import React from "react";
import { ChevronDown, Plus } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#fcfcfc] border-b border-gray-100 p-4">
      {/* 🌍 Left Side: Language & Settings */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Language Selector - The "Figma" Rounded Look */}
        <div className="relative w-full md:w-auto">
          <select className="w-full md:w-35 appearance-none bg-white border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer">
            <option>ქართული</option>
            <option>English</option>
          </select>
          {/* Custom Chevron - Positions it over the hidden default arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Checkbox Styling */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 transition-all"
            />
            {/* Checkmark icon appears when checked */}
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
            ფორმატის შენარჩუნება
          </span>
        </label>
      </div>

      {/* ➕ Right Side: Action Button */}
      <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#8b92a1] hover:bg-[#7a818f] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm active:scale-95">
        <Plus size={18} />
        ახლის გახსნა
      </button>
    </div>
  );
};

export default TopBar;
