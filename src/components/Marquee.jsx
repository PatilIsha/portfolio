export default function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee marquee--accent">
        <div className="marquee__track">
          {row.map((t, i) => (
            <span key={i}>
              {t} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
