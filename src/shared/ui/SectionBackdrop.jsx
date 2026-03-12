export function SectionBackdrop({
  backgroundClassName,
  gradients,
  grain,
  divider,
}) {
  return (
    <div className={backgroundClassName}>
      {gradients?.map((gradient) => (
        <div
          key={gradient.key}
          className={gradient.className}
          style={gradient.style}
        />
      ))}

      {grain ? (
        <div className={grain.className} style={grain.style} />
      ) : null}

      {divider ? (
        <div className={divider.className} style={divider.style} />
      ) : null}
    </div>
  );
}

