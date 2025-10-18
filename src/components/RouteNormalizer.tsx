import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logger } from '@/utils/logger';

/**
 * RouteNormalizer automatically fixes malformed paths:
 * - Collapses multiple slashes: //tools/cv-ingestion → /tools/cv-ingestion
 * - Strips protocol-in-path: /http://localhost:8080/tools/cv-ingestion → /tools/cv-ingestion
 */
export function RouteNormalizer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    let normalized = pathname;

    // Strip protocol-in-path (e.g., /http://localhost:8080/path or /https://domain.com/path)
    const protocolMatch = normalized.match(/^\/https?:\/\/[^/]+(\/.*)?$/);
    if (protocolMatch) {
      normalized = protocolMatch[1] || '/';
      logger.log('[RouteNormalizer] Stripped protocol-in-path:', pathname, '→', normalized);
    }

    // Collapse multiple slashes (e.g., //tools///cv-ingestion → /tools/cv-ingestion)
    const collapsedPath = normalized.replace(/\/{2,}/g, '/');
    if (collapsedPath !== normalized) {
      normalized = collapsedPath;
      logger.log('[RouteNormalizer] Collapsed slashes:', pathname, '→', normalized);
    }

    // If we normalized anything, navigate to the corrected path
    if (normalized !== pathname) {
      const correctedUrl = normalized + search + hash;
      logger.log('[RouteNormalizer] Redirecting to:', correctedUrl);
      navigate(correctedUrl, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
