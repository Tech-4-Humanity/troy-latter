import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { LenovoAdvisor } from '@/components/lenovo/LenovoAdvisor';

const TacticalDeck = () => {
  const [filter, setFilter] = useState('');
  const [activeChip, setActiveChip] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const clearFilter = () => {
    setFilter('');
    setActiveChip('');
  };

  const handleChipClick = (query: string) => {
    setActiveChip(activeChip === query ? '' : query);
    setFilter(activeChip === query ? '' : query);
  };

  const applyFilter = (term: string) => {
    const t = term.trim().toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach((row) => {
      row.classList.remove('highlight');
      if (!t) return;
      const hit = row.textContent?.toLowerCase().includes(t);
      if (hit) row.classList.add('highlight');
    });
  };

  const measureHeader = useCallback(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--deck-header-h', `${height}px`);
    }
  }, []);

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  useEffect(() => {
    measureHeader();
    
    const observer = new ResizeObserver(measureHeader);
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    window.addEventListener('resize', measureHeader);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measureHeader);
    };
  }, [measureHeader]);

  const chips = [
    'ThinkPad', 'ThinkStation', 'ThinkSystem', 'ThinkAgile', 'ThinkCentre',
    'ThinkVision', 'ThinkBook', 'ThinkShield', 'TruScale', 'SE350', 'P1'
  ];

  return (
    <div id="tactical-deck" className="min-h-screen" style={{ 
      background: 'hsl(220 20% 7%)',
      color: 'hsl(220 15% 92%)',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
      lineHeight: '1.5'
    }}>
      <Helmet>
        <title>Lenovo Tactical Deck</title>
        <meta name="description" content="Concise Lenovo product tactics by industry with vignettes and competitor context." />
        <meta name="robots" content="noindex,nofollow" />
        <style type="text/css">{`
          :root {
            --deck-header-h: 100px;
          }
          tbody tr.highlight {
            background: rgba(108, 212, 255, 0.18) !important;
          }
          thead th.sticky-header {
            position: sticky;
            top: var(--deck-header-h);
            z-index: 20;
            background: hsl(220 20% 7%) !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          #tactical-deck table td,
          #tactical-deck table th {
            white-space: normal !important;
            overflow-wrap: anywhere;
            word-break: break-word;
            line-height: 1.5;
          }
          #tactical-deck .deck-card,
          #tactical-deck .deck-note,
          #tactical-deck .deck-vignette {
            white-space: normal;
            overflow-wrap: anywhere;
            word-break: break-word;
            line-height: 1.5;
          }
          #tactical-deck .chip {
            white-space: nowrap;
          }
        `}</style>
      </Helmet>

      {/* Header */}
      <header ref={headerRef} className="sticky top-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(15,18,32,0.98), rgba(15,18,32,0.85))',
        backdropFilter: 'saturate(1.2) blur(6px)',
        borderBottom: '1px solid hsl(225 15% 15%)'
      }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 grid grid-cols-2 gap-3 items-center">
          <div className="text-lg font-bold tracking-wide">Lenovo tactical deck</div>
          <div className="flex gap-2 justify-end">
            <input
              type="search"
              placeholder="Filter by product or keyword"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="min-w-[240px] px-3 py-2 rounded-lg border outline-none"
              style={{
                background: 'hsl(225 20% 12%)',
                color: 'hsl(220 15% 92%)',
                border: '1px solid hsl(225 15% 15%)'
              }}
            />
            <button
              onClick={clearFilter}
              className="px-3 py-2 rounded-lg border cursor-pointer text-sm hover:border-[hsl(195_100%_70%)]"
              style={{
                background: 'hsl(225 15% 11%)',
                color: 'hsl(220 15% 92%)',
                border: '1px solid hsl(225 15% 15%)'
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 pb-3">
          <div className="flex gap-2 flex-wrap">
            {chips.map((chip) => (
              <span
                key={chip}
                onClick={() => handleChipClick(chip)}
                className={`px-2.5 py-1.5 rounded-full text-xs cursor-pointer border ${
                  activeChip === chip 
                    ? 'text-[hsl(220_15%_92%)] border-[hsl(195_100%_70%)]' 
                    : 'text-[hsl(220_15%_70%)] border-[hsl(225_15%_15%)]'
                }`}
                style={{
                  background: activeChip === chip 
                    ? 'rgba(108,212,255,0.12)' 
                    : 'hsl(225 15% 11%)'
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold mb-1">Fast read</h1>
        <p className="text-[hsl(220_15%_70%)] mb-4 max-w-[80ch]">
          Use this to map pain to stack to outcome. Keep it clean. Say when it fits. Say when it does not. Name a competitor. Close with a result.
        </p>

        {/* Lenovo Tactical Advisor */}
        <LenovoAdvisor 
          activeChip={activeChip} 
          currentSection="tactical-deck"
        />

        {/* Banking Section */}
        <section id="banking" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Banking</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Fraud models. Secure fleets. Trader screens.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Cred note</strong>
              <p className="text-[hsl(220_15%_70%)]">Call out TruScale for elastic spend. Call out ThinkShield for device control.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Mac fleets in exec teams. Validate ISV needs for traders.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Device sprawl and risk">Device sprawl and risk</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkPad T14s Gen 6 with ThinkShield">ThinkPad T14s Gen 6 with ThinkShield</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Encrypted fleet</span>
                    <span>clean manage</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell Latitude HP EliteBook Apple MacBook">Dell Latitude HP EliteBook Apple MacBook</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Bank rolled 20k ThinkPads and cut breaches in year one
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Fraud detection speed">Fraud detection speed</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem with AI starter kit and TruScale">ThinkSystem with AI starter kit and TruScale</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Faster scores</span>
                    <span>elastic spend</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell PowerEdge HPE ProLiant">Dell PowerEdge HPE ProLiant</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Pilot scaled at peaks only and saved millions
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Trading floor density">Trading floor density</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkVision multi screen plus P series workstations">ThinkVision multi screen plus P series workstations</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Lower energy</span>
                    <span>higher focus</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell UltraSharp HP Z Displays">Dell UltraSharp HP Z Displays</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Energy use fell on the floor after panel swap
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If macOS is mandated then pivot to device services and monitors.
          </p>
        </section>

        {/* Government Section */}
        <section id="government" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Government</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Sovereign data. Transport signals. Branch sites.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Cred note</strong>
              <p className="text-[hsl(220_15%_70%)]">Say edge to core. Say service wrap. Keep it measurable.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Legacy vendor lock. Formal frameworks. Procurement cycles.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="IoT and transport data">IoT and transport data</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="SE350 at depots with ThinkAgile in core">SE350 at depots with ThinkAgile in core</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Real time</span>
                    <span>better plans</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HPE Edgeline Cisco HyperFlex">HPE Edgeline Cisco HyperFlex</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Agency forecast congestion and moved crews early
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Secure desktop fleets">Secure desktop fleets</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkCentre Neo with ThinkShield">ThinkCentre Neo with ThinkShield</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Stable fleet</span>
                    <span>fewer tickets</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell OptiPlex HP ProDesk">Dell OptiPlex HP ProDesk</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Five thousand units went in and calls dropped fast
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Data stays onshore">Data stays onshore</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem DG7200 for records and imaging">ThinkSystem DG7200 for records and imaging</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Audit clean</span>
                    <span>sovereign store</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell EMC NetApp">Dell EMC NetApp</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Records processed onshore with audit paths clean
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If a rival owns the DC then lead with device and edge first.
          </p>
        </section>

        {/* Healthcare Section */}
        <section id="healthcare" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Healthcare</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Imaging. Triage. Ward endpoints. Clinician rounds.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Cred note</strong>
              <p className="text-[hsl(220_15%_70%)]">Say storage for AI. Say device safety for wards.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Clinical ISV needs. Peripherals. Wifi zones.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Imaging choke">Imaging choke</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem DG7200 for imaging sets">ThinkSystem DG7200 for imaging sets</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Faster reads</span>
                    <span>smarter care</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell EMC PowerStore GE Healthcare">Dell EMC PowerStore GE Healthcare</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      AI reads are live and helping triage faster
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Doctor mobility">Doctor mobility</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkPad X1 Yoga with secure sync">ThinkPad X1 Yoga with secure sync</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Live notes</span>
                    <span>ward ready</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP Elite x360 iPad Pro">HP Elite x360 iPad Pro</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Doctors take notes that sync and stay private
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Endpoint sprawl">Endpoint sprawl</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkCentre with ThinkShield in wards">ThinkCentre with ThinkShield in wards</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Safe fleet</span>
                    <span>clean rooms</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell OptiPlex HP ProDesk">Dell OptiPlex HP ProDesk</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Endpoints deployed safely in every ward and cleaned easy
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If they are Apple heavy then lead with monitors and infrastructure.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Research compute. Labs. Student fleets. Semester spikes.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Cred note</strong>
              <p className="text-[hsl(220_15%_70%)]">Say rugged for class. Say TruScale for peak loads.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Budget cycles. Student damage. Summer cooling fell</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HPC demand in research">HPC demand in research</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem clusters with ThinkAgile">ThinkSystem clusters with ThinkAgile</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Research boost</span>
                    <span>grant ready</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell VxRail HPE SimpliVity">Dell VxRail HPE SimpliVity</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Research lab got faster results and more funding
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Student fleets">Student fleets</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkBook and ThinkPad EDU bundles">ThinkBook and ThinkPad EDU bundles</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Rugged fleet</span>
                    <span>low break</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP ProBook Dell Latitude EDU">HP ProBook Dell Latitude EDU</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Student damage dropped and IT calls fell fast
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Teaching labs">Teaching labs</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkStation P series for CAD and VR">ThinkStation P series for CAD and VR</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Ready labs</span>
                    <span>simple care</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP Z Workstations Dell Precision">HP Z Workstations Dell Precision</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      VR units ran stable on P7 in live classes
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If campus is Apple heavy then lean on clusters and monitors first.
          </p>
        </section>

        {/* Startup Section */}
        <section id="startup" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Startup and scale up</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Cloud gaps. GPU need. Cash care. Fast hires.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Cred note</strong>
              <p className="text-[hsl(220_15%_70%)]">Say hybrid. Say OPEX. Keep burn low.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Pure cloud rules. Zero DC ops. Short cycles.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Cloud GPU shortage">Cloud GPU shortage</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkStation P8 with TruScale GPU nodes">ThinkStation P8 with TruScale GPU nodes</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Local train</span>
                    <span>hybrid flex</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP Z series Dell Precision XPS">HP Z series Dell Precision XPS</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Models trained on site and spend stayed sane
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Budget guard">Budget guard</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkBook fleets">ThinkBook fleets</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Durable</span>
                    <span>fair OPEX</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Acer HP ProBook">Acer HP ProBook</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Two hundred staff kitted and spend stayed in check with no fuss
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If they insist on pure cloud then offer device services only.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TacticalDeck;