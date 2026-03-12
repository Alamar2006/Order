export function PrimaryButton({
  children,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full bg-[var(--gradient-accent)] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(var(--accent-rgb),0.35)] transition hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

