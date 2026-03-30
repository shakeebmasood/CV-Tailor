'use client';

import { FileText, Sparkles, ClipboardPaste, Trash2 } from 'lucide-react';

interface JDInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function JDInput({ value, onChange, onGenerate, isGenerating }: JDInputProps) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange(text);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Job Description</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePaste}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ClipboardPaste className="w-3.5 h-3.5" />
              Paste
            </button>
            <button
              onClick={() => onChange('')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </button>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Paste the full job description here...

Example:

We are looking for a Senior DevOps Engineer with experience in AWS, Kubernetes, Terraform, and CI/CD pipelines. The ideal candidate will have...`}
          className="w-full h-80 p-5 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none leading-relaxed"
        />

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
          <div className="text-xs text-gray-400">
            {value.length > 0 ? (
              <span>{value.split(/\s+/).filter(Boolean).length} words</span>
            ) : (
              <span>Paste or type a job description to get started</span>
            )}
          </div>
          <button
            onClick={onGenerate}
            disabled={!value.trim() || isGenerating}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-navy-900 to-navy-700 text-white font-semibold rounded-xl hover:from-navy-800 hover:to-navy-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-navy-900/20"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate Tailored CV
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: '📋',
            title: 'Paste Full JD',
            desc: 'Include the complete job posting for best keyword matching',
          },
          {
            icon: '🎯',
            title: 'Smart Matching',
            desc: 'Skills, experience, and certs are ranked by relevance',
          },
          {
            icon: '📄',
            title: 'One-Page PDF',
            desc: 'Download a clean, ATS-friendly PDF ready to submit',
          },
        ].map((tip) => (
          <div
            key={tip.title}
            className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <span className="text-2xl">{tip.icon}</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">{tip.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
