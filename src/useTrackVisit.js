import { useEffect } from 'react';

const API_URL = '/api/track';

export function useTrackVisit() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('user');
    if (!userId) return;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        domain: window.location.hostname,
        userAgent: navigator.userAgent,
      }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.redirect) {
          window.location.href = data.redirect;
        }
      })
      .catch(() => {});
  }, []);
}