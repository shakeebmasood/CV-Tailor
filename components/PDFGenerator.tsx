'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

export default function PDFGenerator() {
  const [isDownloading, setIsDownloading] = useState(false);

  const generatePDF = async () => {
    setIsDownloading(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const element = document.getElementById('cv-preview');
      if (!element) return;

      // Wait for fonts
      await document.fonts.ready;
      await new Promise((resolve) => setTimeout(resolve, 400));

      // Save original styles
      const origTransform = element.style.transform;
      const origBackface = element.style.backfaceVisibility;
      const origBoxShadow = element.style.boxShadow;
      const origBorder = element.style.border;

      // Temporarily strip styles that cause capture issues
      element.style.transform = 'none';
      element.style.backfaceVisibility = 'visible';
      element.style.boxShadow = 'none';
      element.style.border = 'none';

      // Get exact dimensions
      const rect = element.getBoundingClientRect();

      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: rect.width,
        height: rect.height,
        x: 0,
        y: 0,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      });

      // Restore original styles
      element.style.transform = origTransform;
      element.style.backfaceVisibility = origBackface;
      element.style.boxShadow = origBoxShadow;
      element.style.border = origBorder;

      // A4 in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      pdf.save('Masood_Shakeeb_CV.pdf');
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isDownloading}
      className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-navy-900 to-navy-700 text-white font-semibold rounded-xl hover:from-navy-800 hover:to-navy-600 disabled:opacity-60 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-navy-900/20"
    >
      {isDownloading ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Download PDF
        </>
      )}
    </button>
  );
}
