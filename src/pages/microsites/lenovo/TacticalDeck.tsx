import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TacticalDeck = () => {
  const [filter, setFilter] = useState('');
  const [activeChip, setActiveChip] = useState('');

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

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  const chips = [
    'ThinkPad', 'ThinkStation', 'ThinkSystem', 'ThinkAgile', 'ThinkCentre',
    'ThinkVision', 'ThinkBook', 'ThinkShield', 'TruScale', 'SE350', 'P1'
  ];

  return (
    <div className="min-h-screen" style={{ 
      background: 'hsl(220 20% 7%)',
      color: 'hsl(220 15% 92%)',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
      lineHeight: '1.35'
    }}>
      <Helmet>
        <title>Lenovo Tactical Deck</title>
        <meta name="description" content="Concise Lenovo product tactics by industry with vignettes and competitor context." />
        <meta name="robots" content="noindex,nofollow" />
        <style type="text/css">{`
          tbody tr.highlight {
            background: rgba(108, 212, 255, 0.18) !important;
          }
        `}</style>
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-10" style={{
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

        {/* Banking Section */}
        <section id="banking" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Banking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Use case focus</strong>
              <span className="text-[hsl(220_15%_70%)]">Fraud models. Secure fleets. Trader screens.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Cred note</strong>
              <span className="text-[hsl(220_15%_70%)]">Call out TruScale for elastic spend. Call out ThinkShield for device control.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Watchouts</strong>
              <span className="text-[hsl(220_15%_70%)]">Mac fleets in exec teams. Validate ISV needs for traders.</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                    <th key={header} className="sticky top-[52px] text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
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
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Device sprawl and risk</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkPad T14s Gen 6 with ThinkShield</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Encrypted fleet</span> clean manage
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell Latitude HP EliteBook Apple MacBook</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Bank rolled 20k ThinkPads and cut breaches in year one
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Fraud detection speed</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkSystem with AI starter kit and TruScale</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Faster scores</span> elastic spend
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell PowerEdge HPE ProLiant</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Pilot scaled at peaks only and saved millions
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Trading floor density</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkVision multi screen plus P series workstations</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Lower energy</span> higher focus
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell UltraSharp HP Z Displays</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Energy use fell on the floor after panel swap
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If macOS is mandated then pivot to device services and monitors.
          </p>
        </section>

        {/* Government Section */}
        <section id="government" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Government</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Use case focus</strong>
              <span className="text-[hsl(220_15%_70%)]">Sovereign data. Transport signals. Branch sites.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Cred note</strong>
              <span className="text-[hsl(220_15%_70%)]">Say edge to core. Say service wrap. Keep it measurable.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Watchouts</strong>
              <span className="text-[hsl(220_15%_70%)]">Legacy vendor lock. Formal frameworks. Procurement cycles.</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                    <th key={header} className="sticky top-[52px] text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
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
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>IoT and transport data</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>SE350 at depots with ThinkAgile in core</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Real time</span> better plans
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HPE Edgeline Cisco HyperFlex</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Agency forecast congestion and moved crews early
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Secure desktop fleets</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkCentre Neo with ThinkShield</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Stable fleet</span> fewer tickets
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell OptiPlex HP ProDesk</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Five thousand units went in and calls dropped fast
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Data stays onshore</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkSystem DG7200 for records and imaging</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Sovereign</span> AI ready
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell EMC NetApp</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Records processed onshore with audit paths clean
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If a rival owns the DC then lead with device and edge first.
          </p>
        </section>

        {/* Healthcare Section */}
        <section id="healthcare" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Healthcare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Use case focus</strong>
              <span className="text-[hsl(220_15%_70%)]">Imaging. Triage. Ward endpoints. Clinician rounds.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Cred note</strong>
              <span className="text-[hsl(220_15%_70%)]">Say storage for AI. Say device safety for wards.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Watchouts</strong>
              <span className="text-[hsl(220_15%_70%)]">Clinical ISV needs. Peripherals. Wifi zones.</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                    <th key={header} className="sticky top-[52px] text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
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
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Imaging choke</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkSystem DG7200 for imaging sets</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Faster triage</span> smooth flow
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell EMC PowerStore GE Healthcare</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Lag fell across five hospitals after the move
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Doctor mobility</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkPad X1 Yoga with secure sync</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Fast access</span> safer notes
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP Elite x360 iPad Pro</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Rounds ran faster and notes stayed in control
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Endpoint sprawl</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkCentre with ThinkShield in wards</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Locked devices</span> clean fleet
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell OptiPlex HP ProDesk</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      No patient record breaches after the rollout
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If Apple is fixed in clinic then lead with storage and monitors.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Use case focus</strong>
              <span className="text-[hsl(220_15%_70%)]">Research compute. Labs. Student fleets. Semester spikes.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Cred note</strong>
              <span className="text-[hsl(220_15%_70%)]">Say TruScale for peaks. Say rugged for labs and carts.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Watchouts</strong>
              <span className="text-[hsl(220_15%_70%)]">BYOD rules. Grant timelines. AV stacks.</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                    <th key={header} className="sticky top-[52px] text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
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
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HPC demand in research</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkSystem clusters with ThinkAgile</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Scaled HPC</span> cooler rooms
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell VxRail HPE SimpliVity</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Twenty racks became four nodes and cooling fell
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Student fleets</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkBook and ThinkPad EDU bundles</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Rugged</span> fair cost
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP ProBook Dell Latitude EDU</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Fifty thousand students with no ticket spike
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Teaching labs</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkStation P series for CAD and VR</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Ready labs</span> simple care
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP Z Workstations Dell Precision</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      VR units ran stable on P7 in live classes
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If campus is Apple heavy then lean on clusters and monitors first.
          </p>
        </section>

        {/* Startup Section */}
        <section id="startup" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Startup and scale up</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Use case focus</strong>
              <span className="text-[hsl(220_15%_70%)]">Cloud gaps. GPU need. Cash care. Fast hires.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Cred note</strong>
              <span className="text-[hsl(220_15%_70%)]">Say hybrid. Say OPEX. Keep burn low.</span>
            </div>
            <div className="p-2 rounded-lg border text-sm" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-1">Watchouts</strong>
              <span className="text-[hsl(220_15%_70%)]">Pure cloud rules. Zero DC ops. Short cycles.</span>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                    <th key={header} className="sticky top-[52px] text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
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
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Cloud GPU shortage</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkStation P8 with TruScale GPU nodes</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Local train</span> hybrid flex
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP Z series Dell Precision</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Models trained on site and spend stayed sane
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Staff on the move</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkPad P1 mobile workstations</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Portability</span> real power
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Apple MacBook Pro Dell XPS</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Teams built offline and synced later with no fuss
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Budget guard</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkBook fleets</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs border whitespace-nowrap" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Durable</span> fair OPEX
                  </td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Acer HP ProBook</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="mt-2 p-2 rounded border-l-2 text-xs" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '3px solid hsl(120 60% 70%)'
                    }}>
                      Two hundred staff kitted with headroom intact
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If cloud only then offer device and monitor and services first.
          </p>
        </section>

        {/* Product Quick Map */}
        <section id="products" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Product quick map</h2>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Product line', 'Use', 'Do not use', 'Competitors', 'Integrate'].map((header) => (
                    <th key={header} className="sticky top-[52px] text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
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
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkPad T X P X1</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Enterprise mobility secure manage</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Creative on mac or tiny EDU only</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell Latitude HP EliteBook Apple</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Windows 11 Intune M365 ThinkShield VDI</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkStation P series</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>CAD BIM render AI dev</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Mobile only staff or tight sites</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP Z series Dell Precision Apple Mac Pro</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>NVIDIA AMD ISV stacks Linux</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkSystem</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Core DC hybrid AI database ERP</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Pure cloud native only</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell PowerEdge HPE ProLiant Cisco UCS</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>VMware Nutanix OpenShift K8s Databricks</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkAgile</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HCI simplify racks AI HPC</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Tiny shops or no DC</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell VxRail HPE SimpliVity Cisco HyperFlex</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>vSAN Nutanix K8s</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkCentre</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Gov and EDU desktops kiosks</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>High end media and AI dev</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell OptiPlex HP ProDesk Acer</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>SCCM Horizon Citrix VDI</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkVision</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Office and labs and trading</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Gaming or cinema colorists</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell UltraSharp HP Z LG</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>USB C docks thin clients</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkBook</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>SMB value and rugged</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Deep manage needs</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP ProBook Dell lower bands Acer</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Windows Pro Vantage</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>ThinkShield</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Zero Trust and compliance</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Very small shops</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HP Wolf Dell SafeGuard</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Azure AD Intune</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>TruScale</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>OPEX peaks hybrid AI</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>CAPEX only buyers</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>HPE GreenLake Dell APEX Cisco Plus</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Across all Lenovo lines</td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Edge SE350 SE450</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Retail transport floor sites</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Central DC only</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Dell Edge HPE Edgeline Cisco Edge</td>
                  <td className="border-b px-3 py-3 text-sm align-top" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>Azure IoT AWS Greengrass SCADA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            Say when it fits. Say when it does not. That builds trust fast.
          </p>
        </section>

        <footer className="text-center text-xs mt-6 mb-10" style={{ color: 'hsl(220 15% 70%)' }}>
          RPT_LenovoTacticalDeck_Microsite_20250905.html
        </footer>
      </main>
    </div>
  );
};

export default TacticalDeck;