import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  SpellCheck,
  Columns2,
  Mic,
  Volume2,
  FileType,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  const optiones = [
    { id: "spelling", label: "მართლმწერი", icon: SpellCheck },
    { id: "compare", label: "ტექსტის შედარება", icon: Columns2 },
    { id: "speech-to-text", label: "ხმა 🡢 ტექსტი", icon: Mic },
    { id: "text-to-speech", label: "ტექსტი 🡢 ხმა", icon: Volume2 },
    { id: "pdf", label: "PDF კონვერტაცია", icon: FileType },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ტექსტის შედარება");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <>
      {/* 📱 MOBILE NAVIGATION */}
      <div className="md:hidden flex flex-col w-full z-50 bg-white">
        <header className="flex items-center justify-between bg-[#0a192f] p-4 text-white">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold tracking-tight text-xs">DIAGRAM</span>
          </div>
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="p-2">
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* White Category Bar */}
        <div className="relative border-b border-gray-100 bg-white">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full p-4 flex items-center gap-2 text-[#0a192f]"
          >
            <Columns2 size={18} className="text-gray-400" />
            <span className="font-bold text-sm">{selectedCategory}</span>
            <ChevronDown
              size={14}
              className={`ml-auto text-gray-400 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Category Dropdown */}
          {isCategoryOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl z-50">
              <ul className="flex flex-col">
                {optiones.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setSelectedCategory(item.label);
                      setIsCategoryOpen(false);
                    }}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer"
                  >
                    <item.icon size={18} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 🍔 Hamburger Slide-out Menu */}
        {isNavOpen && (
          <div className="fixed inset-x-0 bottom-0 top-16 bg-[#0a192f] text-white z-40 flex flex-col">
            {/* Navigation Links inside Hamburger */}
            <nav className="flex-1 p-6">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                მენიუ
              </p>
              <ul className="space-y-6">
                {optiones.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setSelectedCategory(item.label);
                      setIsNavOpen(false);
                    }}
                    className={`flex items-center gap-4 ${selectedCategory === item.label ? "text-white font-bold" : "text-gray-400"}`}
                  >
                    <item.icon size={22} />
                    <span className="text-base">{item.label}</span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 👤 MOBILE USER SECTION (The Missing Piece) */}
            <div className="p-6 border-t border-gray-800 bg-[#071324]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400">
                  თო
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-white">თამარ ონანი</p>
                  <p className="text-[10px] text-gray-500">პროფილი</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 💻 DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-72 bg-[#0a192f] text-white sticky top-0 h-screen shrink-0">
        <div className="p-8 flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          <h2 className="text-xl font-bold tracking-tight uppercase">
            Diagram
          </h2>
        </div>

        <ul className="flex-1 mt-4">
          {optiones.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedCategory(item.label)}
              className={`relative cursor-pointer px-8 py-4 flex items-center gap-4 transition-all ${
                selectedCategory === item.label
                  ? "bg-white text-[#0a192f] rounded-l-full font-bold ml-4"
                  : "text-gray-400"
              }`}
            >
              {selectedCategory === item.label && (
                <>
                  <div className="absolute -top-5 right-0 w-5 h-5 bg-white">
                    <div className="w-full h-full bg-[#0a192f] rounded-br-[20px]"></div>
                  </div>
                  <div className="absolute -bottom-5 right-0 w-5 h-5 bg-white">
                    <div className="w-full h-full bg-[#0a192f] rounded-tr-[20px]"></div>
                  </div>
                </>
              )}
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* 👤 DESKTOP USER SECTION */}
        <div className="p-6 border-t border-gray-800 bg-[#071324]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold">
              თო
            </div>
            <p className="text-sm font-medium text-white">თამარ ონანი</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
