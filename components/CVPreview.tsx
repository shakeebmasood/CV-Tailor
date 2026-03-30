'use client';

import { TailoredCV } from '@/lib/tailor-cv';

interface CVPreviewProps {
  cv: TailoredCV;
}

export default function CVPreview({ cv }: CVPreviewProps) {
  const highlightMetrics = (text: string) => {
    const parts = text.split(/([€$₹]?[\d,.]+[KMB]?\+?(?:\s?(?:INR|USD|EUR|%|months?|years?|workers?|INR\/month))?)/);
    return parts.map((part, i) => {
      if (
        /[€$₹]?[\d,.]+[KMB]?\+?(?:\s?(?:INR|USD|EUR|%|months?|years?|workers?|INR\/month))?/.test(part) &&
        part.trim().length > 0 &&
        /\d/.test(part)
      ) {
        return (
          <strong key={i} className="cv-bold">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Matched Keywords Bar */}
      <div className="w-full max-w-[210mm] mb-4 p-3 bg-navy-50 border border-navy-200 rounded-xl">
        <p className="text-xs font-semibold text-navy-900 mb-2">
          🎯 Matched {cv.matchedKeywords.length} keywords from JD:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {cv.matchedKeywords.slice(0, 30).map((kw) => (
            <span
              key={kw}
              className="px-2 py-0.5 text-[10px] font-medium bg-navy-100 text-navy-800 rounded-full"
            >
              {kw}
            </span>
          ))}
          {cv.matchedKeywords.length > 30 && (
            <span className="px-2 py-0.5 text-[10px] font-medium text-navy-600">
              +{cv.matchedKeywords.length - 30} more
            </span>
          )}
        </div>
      </div>

      {/* CV Page */}
      <div id="cv-preview" className="cv-page">
        {/* ===== HEADER ===== */}
        <div className="cv-header">
          <h1 className="cv-name">{cv.name}</h1>
          <p className="cv-title">{cv.title}</p>
          <div className="cv-contact">
            <span>{cv.email}</span>
            <span className="cv-contact-sep">|</span>
            <span>{cv.phone}</span>
            <span className="cv-contact-sep">|</span>
            <span>{cv.location}</span>
            <span className="cv-contact-sep">|</span>
            <span>{cv.linkedin}</span>
          </div>
        </div>

        {/* ===== PROFILE ===== */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Profile</h2>
          <p className="cv-body-text">{cv.summary}</p>
        </div>

        {/* ===== TWO-COLUMN BODY ===== */}
        <div className="cv-columns">
          {/* ---- LEFT COLUMN ---- */}
          <div className="cv-col-left">
            <h2 className="cv-section-heading">Experience</h2>

            {cv.experience.map((exp, idx) => (
              <div key={idx} className="cv-exp-block">
                <div className="cv-exp-header">
                  <span className="cv-exp-role">{exp.role}</span>
                  <span className="cv-exp-date">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="cv-exp-company">{exp.company} · {exp.location}</p>
                <ul className="cv-bullet-list">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="cv-bullet">
                      {highlightMetrics(h)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Key Impact */}
            <div className="cv-section cv-impact-section">
              <h2 className="cv-section-heading">Key Impact</h2>
              <div className="cv-impact-grid">
                {cv.achievements.map((a, idx) => (
                  <div key={idx} className="cv-impact-item">
                    <span className="cv-impact-star">★</span>
                    <p className="cv-impact-text">{highlightMetrics(a)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles I Target */}
            <div className="cv-section">
              <h2 className="cv-section-heading">Roles I Target</h2>
              <div className="cv-roles-wrap">
                {cv.rolesISuit.map((role, idx) => (
                  <span key={idx} className="cv-role-tag">{role}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ---- RIGHT COLUMN ---- */}
          <div className="cv-col-right">
            {/* Core Skills */}
            <h2 className="cv-section-heading">Core Skills</h2>
            {cv.skills.map((cat, idx) => (
              <div key={idx} className="cv-skill-group">
                <p className="cv-skill-category">{cat.category}</p>
                <p className="cv-skill-list">{cat.skills.join('  ·  ')}</p>
              </div>
            ))}

            {/* Tools */}
            <div className="cv-section">
              <h2 className="cv-section-heading">Tools</h2>
              <div className="cv-tools-wrap">
                {cv.tools.map((tool, idx) => (
                  <span key={idx} className="cv-tool-tag">{tool}</span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="cv-section">
              <h2 className="cv-section-heading">Education</h2>
              {cv.education.map((edu, idx) => (
                <div key={idx} className="cv-edu-block">
                  <p className="cv-edu-degree">{edu.degree}</p>
                  <p className="cv-edu-school">{edu.institution}</p>
                  {edu.details && <p className="cv-edu-details">{edu.details}</p>}
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="cv-section">
              <h2 className="cv-section-heading">Languages</h2>
              {cv.languages.map((lang, idx) => (
                <div key={idx} className="cv-lang-row">
                  <span className="cv-lang-name">{lang.language}</span>
                  <span className="cv-lang-level">{lang.level}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="cv-section">
              <h2 className="cv-section-heading">Highlights</h2>
              <div className="cv-highlights-grid">
                {[
                  { value: '7+', label: 'Years CEO Advisory' },
                  { value: '€11M', label: 'Enterprise Revenue' },
                  { value: '$100K', label: 'Venture in 6mo' },
                  { value: '₹800M', label: 'Projects Delivered' },
                  { value: '350+', label: 'Workers Managed' },
                  { value: '3', label: 'Countries Operated' },
                ].map((item, idx) => (
                  <div key={idx} className="cv-highlight-card">
                    <p className="cv-highlight-value">{item.value}</p>
                    <p className="cv-highlight-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
