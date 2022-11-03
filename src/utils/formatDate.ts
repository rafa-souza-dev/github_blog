import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getDistanceOfDateToNow(date: Date) {
  const formatedDate = formatDistanceToNow(date, {
    locale: ptBR
  })

  return `Há ${formatedDate}`
}
