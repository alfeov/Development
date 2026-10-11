export function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const empty = 5 - full
  return (
    <span className="text-sm text-yellow-400">
      {"★".repeat(full)}
      {"☆".repeat(empty)}
      <span className="ml-1 text-zinc-400">{rating.toFixed(1)}</span>
    </span>
  )
}
