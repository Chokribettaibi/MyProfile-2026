export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 className="reveal" style={{ "--reveal-delay": "70ms" }}>
        {title}
      </h2>
      {description && (
        <p
          className="section-description reveal"
          style={{ "--reveal-delay": "140ms" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
