'use client';

import { FileText, Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <FileText className="w-6 h-6 text-navy-200" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight flex items-center gap-1.5">
                CV Tailor
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </h1>
              <p className="text-[10px] text-navy-300 -mt-0.5 tracking-wide">
                AI-Powered One-Page CV Generator
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-navy-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs">Career Data Loaded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
