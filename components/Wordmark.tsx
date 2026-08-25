interface WordmarkProps {
  className?: string;
  textClassName?: string;
}

// The "answer&book" text lockup — lowercase, bold, with the "&" set larger
// in lime and a small zigzag underline accent beneath "book".
export default function Wordmark({ className = "", textClassName = "" }: WordmarkProps) {
  return (
    <span className={`inline-flex items-baseline font-heading font-bold leading-none ${textClassName} ${className}`}>
      <span>answer</span>
      <span className="mx-0.5 text-accent" style={{ fontSize: "1.2em" }}>
        &amp;
      </span>
      <span className="relative">
        book
        <svg
          className="absolute -bottom-1.5 left-0 w-full text-accent"
          height="6"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 6 L16 1 L33 7 L50 2 L67 7 L84 1 L100 5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}
