// A single fixed-position glow layer shared by every section on a marketing
// page (Hero through GetStartedSection), instead of each section re-drawing
// its own local gradient. Because it's `position: fixed`, it stays pinned to
// the viewport as the page scrolls — sections above it are transparent, so
// this one continuous gradient shows through everywhere, rather than the
// glow visibly repeating/resetting at each section boundary.
export default function PageGlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-navy-900"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 15%, rgba(168,229,5,0.16), transparent 40%), radial-gradient(circle at 78% 30%, rgba(65,30,184,0.85), transparent 60%)",
      }}
    />
  );
}
