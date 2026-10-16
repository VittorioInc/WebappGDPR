// Popup coordinates depend on the browser's current element and viewport sizes.
export function getHelpPosition(anchor, popup, viewport) {
  const margin = 12
  const gap = 8
  const below = anchor.bottom + gap
  const top = below + popup.height <= viewport.height - margin
    ? below
    : anchor.top - popup.height - gap
  return {
    left: Math.max(margin, Math.min(anchor.left, viewport.width - popup.width - margin)),
    top: Math.max(margin, Math.min(top, viewport.height - popup.height - margin)),
  }
}
