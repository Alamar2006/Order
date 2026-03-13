export function PrimaryButton({
  children,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex 
        items-center 
        justify-center 
        rounded-full 
        bg-gradient-accent 
        px-6 
        py-2.5 
        text-sm 
        font-semibold 
        text-white 
        shadow-lg 
        shadow-accent/35 
        transition 
        hover:brightness-110
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}