import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Load external scripts only in development
if (import.meta.env.DEV) {
  const script = document.createElement('script');
  script.src = 'https://cdn.gpteng.co/gptengineer.js';
  script.type = 'module';
  document.head.appendChild(script);
  
  // Error logging for development only
  window.addEventListener('error', (e) => {
    if (e.target && e.target !== window) {
      const target = e.target as HTMLElement & { src?: string; href?: string };
      if (import.meta.env.DEV) {
        console.warn('Resource load error:', target.src || target.href);
      }
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
