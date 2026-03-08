import React, { useState } from "react";
import { diffChars } from "diff";
import { ArrowRightLeft, ArrowDownUp, RotateCcw, Pencil } from "lucide-react";

const TextComparator = () => {
  const [textLeft, setTextLeft] = useState("");
  const [textRight, setTextRight] = useState("");
  const [diffResult, setDiffResult] = useState(null);

  const handleCompare = () => {
    // Generates the character-by-character difference
    const differences = diffChars(textLeft, textRight);
    setDiffResult(differences);
  };

  const handleReset = () => {
    setDiffResult(null);
    setTextLeft("");
    setTextRight("");
  };

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto p-4 md:p-6">
      {/* Main Comparison Boxes */}
      <div className="flex flex-col md:flex-row flex-1 gap-6 items-stretch">
        {/* Box A (Source Text / Deletions) */}
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-xs font-bold text-red-600 uppercase tracking-tight">
            Visual Diff A (Red = Deleted Text)
          </label>
          <div className="flex-1 min-h-75 bg-white rounded-xl border border-gray-200 p-4 shadow-sm overflow-y-auto">
            {!diffResult ? (
              <textarea
                value={textLeft}
                onChange={(e) => setTextLeft(e.target.value)}
                spellCheck="false"
                data-gramm="false"
                placeholder="Source Text (A)..."
                className="w-full h-full bg-transparent outline-none resize-none text-gray-700 placeholder-gray-300 text-sm font-mono"
              />
            ) : (
              <div className="text-sm font-mono leading-relaxed whitespace-pre-wrap break-all">
                {diffResult.map((part, index) => {
                  // Hide characters that were only added to the second text
                  if (part.added) return null;
                  return (
                    <span
                      key={index}
                      className={
                        part.removed
                          ? "text-red-600 font-bold bg-red-50"
                          : "text-gray-700"
                      }
                    >
                      {part.value}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Center Spacer (Icon) */}
        <div className="hidden md:flex items-center justify-center text-gray-300 px-2">
          <ArrowRightLeft size={20} />
        </div>

        {/*  Box B (Target Text / Insertions) */}
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-xs font-bold text-green-600 uppercase tracking-tight">
            Visual Diff B (Green = Inserted Text)
          </label>
          <div className="flex-1 min-h-75 bg-white rounded-xl border border-gray-200 p-4 shadow-sm overflow-y-auto">
            {!diffResult ? (
              <textarea
                value={textRight}
                onChange={(e) => setTextRight(e.target.value)}
                spellCheck="false"
                data-gramm="false"
                placeholder="Target Text (B)..."
                className="w-full h-full bg-transparent outline-none resize-none text-gray-700 placeholder-gray-300 text-sm font-mono"
              />
            ) : (
              <div className="text-sm font-mono leading-relaxed whitespace-pre-wrap break-all">
                {diffResult.map((part, index) => {
                  // Hide characters that were only removed from the first text
                  if (part.removed) return null;
                  return (
                    <span
                      key={index}
                      className={
                        part.added
                          ? "text-green-600 font-bold bg-green-50"
                          : "text-gray-700"
                      }
                    >
                      {part.value}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔘 Controls */}
      <div className="flex flex-col items-center gap-4 mt-8 pb-10">
        {!diffResult ? (
          <button
            onClick={handleCompare}
            className="bg-[#0a192f] hover:bg-[#112240] text-white px-12 py-3 rounded-lg font-bold transition-all shadow-md active:scale-95 text-sm"
          >
            Compare Diff
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={() => setDiffResult(null)}
              className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-2.5 rounded-lg font-bold transition-all shadow-sm text-sm"
            >
              <Pencil size={16} /> Edit Again
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 px-8 py-2.5 rounded-lg font-bold transition-all text-sm"
            >
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextComparator;
