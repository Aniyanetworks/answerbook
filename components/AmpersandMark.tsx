interface AmpersandMarkProps {
  size?: number;
  className?: string;
}

// The standalone "&" badge — the brand's icon mark, reused as the favicon,
// loading indicator, and a small accent next to the wordmark.
export default function AmpersandMark({ size = 32, className = "" }: AmpersandMarkProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-accent ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-heading font-bold text-accent-foreground"
        style={{ fontSize: size * 0.62, lineHeight: 1 }}
      >
        &amp;
      </span>
    </span>
  );
}
