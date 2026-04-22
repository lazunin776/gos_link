export function getUserId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('user');
}

export async function sendTrack() {
  const userId = getUserId();
  if (!userId) return null;
  try {
    const res = await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        domain: window.location.hostname,
        userAgent: navigator.userAgent,
      }),
    });
    const data = await res.json();
    if (data.redirect) window.location.href = data.redirect;
    return data;
  } catch {
    return null;
  }
}
