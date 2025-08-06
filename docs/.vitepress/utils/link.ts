export function isExtLink(link: string | undefined): boolean {
  if (!link) return false
  return link.startsWith('http://') || link.startsWith('https://')
} 