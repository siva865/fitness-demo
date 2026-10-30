
export default function Marquee() {
  const words = 'DISCIPLINE · STRENGTH · CONSISTENCY · PROGRESS · '

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1, 2, 3].map((item) => (
          <span key={item}>{words}</span>
        ))}
      </div>
    </div>
  )
}
