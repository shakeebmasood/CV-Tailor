'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import JDInput from '@/components/JDInput';
import CVPreview from '@/components/CVPreview';
import PDFGenerator from '@/components/PDFGenerator';
import { tailorCV, TailoredCV } from '@/lib/tailor-cv';

export default function Home() {
  const [jobDescription, setJobDescription] = useState('');
  const [tailoredCV, setTailoredCV] = useState<TailoredCV | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!jobDescription.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const cv = tailorCV(jobDescription);
      setTailoredCV(cv);
      setIsGenerating(false);
    }, 800);
  };

  const handleReset = () => {
    setTailoredCV(null);
    setJobDescription('');
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!tailoredCV ? (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Generate Your Tailored CV
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Paste a job description below and the app will intelligently match your
                career history to create a targeted one-page PDF CV.
              </p>
            </div>
            <JDInput
              value={jobDescription}
              onChange={setJobDescription}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Tailored CV</h2>
                <p className="text-gray-500 mt-1">Review and download your one-page CV</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 font-medium transition-all"
                >
                  ← New JD
                </button>
                <PDFGenerator />
              </div>
            </div>
            <CVPreview cv={tailoredCV} />
          </div>
        )}
      </div>
    </main>
  );
}
