import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeatmapData {
  [key: string]: number[][];
}

interface TwoByTwoHeatmapProps {
  className?: string;
}

export const TwoByTwoHeatmap = ({ className }: TwoByTwoHeatmapProps) => {
  const [heatOn, setHeatOn] = useState(false);

  // Per-2×2 opportunity scores from 1 to 5, mapped by h3 title
  // Matrix order: [ [row0col0, row0col1], [row1col0, row1col1] ]
  const matrices: HeatmapData = {
    "Customer Relationship": [[1,3],[3,5]],
    "Technology": [[2,3],[3,5]],
    "Competitor": [[3,5],[2,4]],
    "Roles and Ownership": [[3,4],[3,5]],
    "Partners": [[3,4],[2,5]],
    "Tactics": [[4,3],[3,5]],
    "Orchestration": [[3,4],[2,5]],
    "Stakeholder": [[2,4],[3,5]],
    "Execution Horizon": [[3,4],[2,5]],
    "Risk vs Opportunity": [[1,3],[2,5]],
    "Geographic Growth": [[2,4],[3,5]],
    "Customer Journey": [[2,4],[3,5]]
  };

  const getColorForScore = (score: number): string => {
    const colorMap: { [key: number]: string } = {
      1: 'hsl(210 40% 92%)', // Light grey
      2: 'hsl(210 100% 90%)', // Light blue
      3: 'hsl(43 96% 75%)', // Amber
      4: 'hsl(120 60% 80%)', // Light green
      5: 'hsl(120 60% 65%)' // Green
    };
    return colorMap[score] || colorMap[1];
  };

  const applyHeatToTable = (table: HTMLTableElement, title: string) => {
    const matrix = matrices[title] || [[2,3],[3,5]];
    const rows = table.querySelectorAll('tbody tr');
    
    if (rows.length < 2) return;
    
    rows.forEach((tr, rowIndex) => {
      const cells = tr.querySelectorAll('td');
      if (cells.length < 2) return;
      
      // Apply heat to the last two cells (avoiding row headers)
      [cells[0], cells[1]].forEach((td, colIndex) => {
        const score = matrix[rowIndex][colIndex];
        const cell = td as HTMLElement;
        
        if (heatOn) {
          cell.style.backgroundColor = getColorForScore(score);
          cell.style.color = '#111';
          cell.setAttribute('data-score', score.toString());
          
          // Add tooltip
          let tooltip = cell.querySelector('.heat-tooltip');
          if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'heat-tooltip absolute z-10 bg-black/85 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 transition-opacity duration-150 pointer-events-none';
            tooltip.textContent = `Score ${score} opportunity`;
            cell.style.position = 'relative';
            cell.appendChild(tooltip);
          }
          
          cell.addEventListener('mouseenter', () => {
            if (tooltip) (tooltip as HTMLElement).style.opacity = '1';
          });
          
          cell.addEventListener('mouseleave', () => {
            if (tooltip) (tooltip as HTMLElement).style.opacity = '0';
          });
        } else {
          cell.style.backgroundColor = '';
          cell.style.color = '';
          cell.removeAttribute('data-score');
          const tooltip = cell.querySelector('.heat-tooltip');
          if (tooltip) tooltip.remove();
        }
      });
    });
  };

  const toggleHeat = () => {
    const newHeatState = !heatOn;
    setHeatOn(newHeatState);
    
    // Find all 2x2 frameworks section
    const frameworksSection = document.querySelector('#two-by-two-complete');
    if (!frameworksSection) return;
    
    // Find each h3 and its following table
    const headings = frameworksSection.querySelectorAll('h3');
    headings.forEach(h3 => {
      const table = h3.nextElementSibling as HTMLTableElement;
      if (table && table.tagName === 'TABLE') {
        applyHeatToTable(table, h3.textContent?.trim() || '');
      }
    });
  };

  return (
    <section className={cn("py-8", className)} id="two-by-two-heatmap">
      <h2 className="text-2xl font-bold mb-4">2×2 Frameworks Heatmap</h2>
      <p className="text-muted-foreground mb-4">
        Toggle the heatmap to see where to push and where to hold. Scores reflect opportunity. Green is higher. Grey is lower.
      </p>
      
      <div className="flex items-center gap-4 mb-6">
        <Button 
          onClick={toggleHeat}
          variant="outline"
          className="px-4 py-2"
        >
          {heatOn ? 'Hide heatmap' : 'Show heatmap'}
        </Button>
        <span className="text-sm text-muted-foreground">
          Legend: Low ▢ ▢ ▢ High
        </span>
      </div>
    </section>
  );
};