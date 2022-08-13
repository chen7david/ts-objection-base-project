import crypto from 'crypto'

export function digits(size = 6): string {
  const zeros = Array(size - 1)
    .fill(0)
    .join('')
  const first = parseInt(`1${zeros}`)
  const second = parseInt(`9${zeros}`)
  return Math.floor(first + Math.random() * second).toString()
}

export function md5(seed?: string | null): string {
  const random = seed ? seed : new Date().toString() + Math.random()
  return crypto.createHash('md5').update(String(random)).digest('hex')
}

export function uuid(): string {
  return crypto.randomUUID()
}
