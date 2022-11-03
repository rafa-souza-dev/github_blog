export function reduceText(text: string) {
  if (text.length <= 152) return text

  return text.substring(0, 152) + "..."
}
