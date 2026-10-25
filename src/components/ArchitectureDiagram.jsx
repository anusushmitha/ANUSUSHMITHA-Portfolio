import React, { useState } from 'react';

export default function ArchitectureDiagram({ projectId, activeColor = '#B8A27A' }) {
  const [activeStep, setActiveStep] = useState(null);

  // Diagrams tailored for each project
  if (projectId === '01') {
    // VisionGuard AI Diagram: Video/Image -> CLAHE -> YOLOv8 + ViT -> Severity Score -> Telemetry
    const steps = [
      { id: 1, label: 'Feed Stream', desc: 'RTSP / 4K Optical Sensors', x: 40, y: 50 },
      { id: 2, label: 'CLAHE Filter', desc: 'OpenCV Contrast Enhancement', x: 130, y: 50 },
      { id: 3, label: 'YOLOv8 + ViT', desc: 'Localization & Patch Classifier', x: 235, y: 50 },
      { id: 4, label: 'Severity Engine', desc: 'Defect Grading & Scoring', x: 345, y: 50 },
      { id: 5, label: 'FastAPI Telemetry', desc: 'WebSocket Real-time Push', x: 450, y: 50 }
    ];

    return (
      <div className="w-full bg-[#141414]/5 dark:bg-[#151515] border border-charcoal-800/10 dark:border-ivory-100/10 p-5 rounded-none font-mono text-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <span className="text-[10px] tracking-micro uppercase text-champagne">
            Architecture Blueprint // Pipeline 01
          </span>
          <span className="text-[10px] text-charcoal-500 dark:text-charcoal-400">
            Latency &lt;28ms · 35 FPS
          </span>
        </div>

        <svg viewBox="0 0 500 100" className="w-full h-auto overflow-visible select-none" aria-label="VisionGuard AI Architecture Diagram">
          <defs>
            <marker id="arrow-gold" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill={activeColor} />
            </marker>
          </defs>

          {/* Connection Lines */}
          <line x1="80" y1="50" x2="105" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold)" />
          <line x1="170" y1="50" x2="195" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold)" />
          <line x1="285" y1="50" x2="310" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold)" />
          <line x1="390" y1="50" x2="415" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold)" />

          {/* Stage Nodes */}
          {steps.map((s, idx) => {
            const isHovered = activeStep === s.id;
            return (
              <g 
                key={s.id} 
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveStep(s.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <rect
                  x={s.x - 35}
                  y={s.y - 25}
                  width="70"
                  height="50"
                  fill={isHovered ? (document.documentElement.classList.contains('dark') ? '#222' : '#EFEBE1') : 'transparent'}
                  stroke={isHovered ? activeColor : 'currentColor'}
                  strokeWidth={isHovered ? '1.5' : '0.75'}
                  className="text-charcoal-800/30 dark:text-ivory-100/20"
                />
                <text
                  x={s.x}
                  y={s.y - 5}
                  textAnchor="middle"
                  className={`text-[9px] font-sans font-medium uppercase tracking-wider ${isHovered ? 'fill-champagne' : 'fill-charcoal-800 dark:fill-ivory-100'}`}
                >
                  {s.label}
                </text>
                <text
                  x={s.x}
                  y={s.y + 12}
                  textAnchor="middle"
                  className="text-[7.5px] fill-charcoal-500 dark:fill-charcoal-400"
                >
                  [0{idx + 1}]
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-2 min-h-[22px] text-[11px] text-charcoal-600 dark:text-charcoal-300 transition-opacity">
          {activeStep ? (
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne inline-block"></span>
              <strong>{steps.find(s => s.id === activeStep)?.label}:</strong> {steps.find(s => s.id === activeStep)?.desc}
            </span>
          ) : (
            <span className="text-charcoal-400 dark:text-charcoal-500 text-[10px] tracking-wide">
              Hover over pipeline stages to inspect processing layers
            </span>
          )}
        </div>
      </div>
    );
  }

  if (projectId === '02') {
    // EnterpriseMind: Ingestion -> BM25 + Qdrant -> Cross-Encoder -> LangGraph Reasoner -> Grounded Citation
    const steps = [
      { id: 1, label: 'Corpus Parser', desc: 'PDF & Unstructured Docs (10k+)', x: 40, y: 50 },
      { id: 2, label: 'Hybrid Retr.', desc: 'Dense (Qdrant) + Sparse (BM25)', x: 130, y: 50 },
      { id: 3, label: 'Reranker', desc: 'Cross-Encoder Relevance Score', x: 235, y: 50 },
      { id: 4, label: 'LangGraph', desc: 'Multi-hop Agentic Synthesis', x: 345, y: 50 },
      { id: 5, label: 'Citation Guard', desc: 'Sentence-Level Source Provenance', x: 450, y: 50 }
    ];

    return (
      <div className="w-full bg-[#141414]/5 dark:bg-[#151515] border border-charcoal-800/10 dark:border-ivory-100/10 p-5 rounded-none font-mono text-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <span className="text-[10px] tracking-micro uppercase text-champagne">
            Architecture Blueprint // Pipeline 02
          </span>
          <span className="text-[10px] text-charcoal-500 dark:text-charcoal-400">
            Faithfulness 94.2% · Zero Hallucination
          </span>
        </div>

        <svg viewBox="0 0 500 100" className="w-full h-auto overflow-visible select-none" aria-label="EnterpriseMind Architecture Diagram">
          <defs>
            <marker id="arrow-gold-2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill={activeColor} />
            </marker>
          </defs>

          {/* Connection Lines */}
          <line x1="80" y1="50" x2="105" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-2)" />
          <line x1="170" y1="50" x2="195" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-2)" />
          <line x1="285" y1="50" x2="310" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-2)" />
          <line x1="390" y1="50" x2="415" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-2)" />

          {/* Stage Nodes */}
          {steps.map((s, idx) => {
            const isHovered = activeStep === s.id;
            return (
              <g 
                key={s.id} 
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveStep(s.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <rect
                  x={s.x - 35}
                  y={s.y - 25}
                  width="70"
                  height="50"
                  fill={isHovered ? (document.documentElement.classList.contains('dark') ? '#222' : '#EFEBE1') : 'transparent'}
                  stroke={isHovered ? activeColor : 'currentColor'}
                  strokeWidth={isHovered ? '1.5' : '0.75'}
                  className="text-charcoal-800/30 dark:text-ivory-100/20"
                />
                <text
                  x={s.x}
                  y={s.y - 5}
                  textAnchor="middle"
                  className={`text-[9px] font-sans font-medium uppercase tracking-wider ${isHovered ? 'fill-champagne' : 'fill-charcoal-800 dark:fill-ivory-100'}`}
                >
                  {s.label}
                </text>
                <text
                  x={s.x}
                  y={s.y + 12}
                  textAnchor="middle"
                  className="text-[7.5px] fill-charcoal-500 dark:fill-charcoal-400"
                >
                  [0{idx + 1}]
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-2 min-h-[22px] text-[11px] text-charcoal-600 dark:text-charcoal-300 transition-opacity">
          {activeStep ? (
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne inline-block"></span>
              <strong>{steps.find(s => s.id === activeStep)?.label}:</strong> {steps.find(s => s.id === activeStep)?.desc}
            </span>
          ) : (
            <span className="text-charcoal-400 dark:text-charcoal-500 text-[10px] tracking-wide">
              Hover over pipeline stages to inspect processing layers
            </span>
          )}
        </div>
      </div>
    );
  }

  // VoxReserve: Audio Stream -> Streaming STT -> 1B Intent Parser -> Tool Calling & DB Mutex -> Neural TTS
  const steps = [
    { id: 1, label: 'Voice Audio', desc: 'WebRTC Full-Duplex PCM Stream', x: 40, y: 50 },
    { id: 2, label: 'Streaming STT', desc: 'Conformer / Whisper Acoustic Engine', x: 130, y: 50 },
    { id: 3, label: '1B Agent', desc: 'Intent Extraction & Slot Filling', x: 235, y: 50 },
    { id: 4, label: 'API & Mutex', desc: 'FastAPI + Redis Concurrency Lock', x: 345, y: 50 },
    { id: 5, label: 'Neural TTS', desc: 'Ultra-low Latency Speech Audio', x: 450, y: 50 }
  ];

  return (
    <div className="w-full bg-[#141414]/5 dark:bg-[#151515] border border-charcoal-800/10 dark:border-ivory-100/10 p-5 rounded-none font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-charcoal-800/10 dark:border-ivory-100/10">
        <span className="text-[10px] tracking-micro uppercase text-champagne">
          Architecture Blueprint // Pipeline 03
        </span>
        <span className="text-[10px] text-charcoal-500 dark:text-charcoal-400">
          Turnaround &lt;420ms · 99.1% Slot Recall
        </span>
      </div>

      <svg viewBox="0 0 500 100" className="w-full h-auto overflow-visible select-none" aria-label="VoxReserve Architecture Diagram">
        <defs>
          <marker id="arrow-gold-3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={activeColor} />
          </marker>
        </defs>

        {/* Connection Lines */}
        <line x1="80" y1="50" x2="105" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-3)" />
        <line x1="170" y1="50" x2="195" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-3)" />
        <line x1="285" y1="50" x2="310" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-3)" />
        <line x1="390" y1="50" x2="415" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-charcoal-400 dark:text-charcoal-600" markerEnd="url(#arrow-gold-3)" />

        {/* Stage Nodes */}
        {steps.map((s, idx) => {
          const isHovered = activeStep === s.id;
          return (
            <g 
              key={s.id} 
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setActiveStep(s.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <rect
                x={s.x - 35}
                y={s.y - 25}
                width="70"
                height="50"
                fill={isHovered ? (document.documentElement.classList.contains('dark') ? '#222' : '#EFEBE1') : 'transparent'}
                stroke={isHovered ? activeColor : 'currentColor'}
                strokeWidth={isHovered ? '1.5' : '0.75'}
                className="text-charcoal-800/30 dark:text-ivory-100/20"
              />
              <text
                x={s.x}
                y={s.y - 5}
                textAnchor="middle"
                className={`text-[9px] font-sans font-medium uppercase tracking-wider ${isHovered ? 'fill-champagne' : 'fill-charcoal-800 dark:fill-ivory-100'}`}
              >
                {s.label}
              </text>
              <text
                x={s.x}
                y={s.y + 12}
                textAnchor="middle"
                className="text-[7.5px] fill-charcoal-500 dark:fill-charcoal-400"
              >
                [0{idx + 1}]
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 min-h-[22px] text-[11px] text-charcoal-600 dark:text-charcoal-300 transition-opacity">
        {activeStep ? (
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne inline-block"></span>
            <strong>{steps.find(s => s.id === activeStep)?.label}:</strong> {steps.find(s => s.id === activeStep)?.desc}
          </span>
        ) : (
          <span className="text-charcoal-400 dark:text-charcoal-500 text-[10px] tracking-wide">
            Hover over pipeline stages to inspect processing layers
          </span>
        )}
      </div>
    </div>
  );
}
