interface Paginated<T> {
  current_page: number
  last_page: number
  per_page: number
  total_results: number
  results: T[]
}

export function paginate<T>(arr: T[], page: number = 1, limit: number = 10, maxLimit?: number): Paginated<T> {
  const MAX_LIMIT = maxLimit || 30
  const take = limit > MAX_LIMIT ? MAX_LIMIT : limit
  const total_results = arr.length
  const last_page = Math.ceil(total_results / take)
  if(page > last_page) page = last_page
  const skip = (page - 1) * take
  const results = arr.slice(skip, skip + take)
  return {
    current_page: page,
    last_page: last_page,
    per_page: take,
    total_results: total_results,
    results: results,
  }
}
