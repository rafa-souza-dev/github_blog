import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getDistanceOfDateToNow(date: Date) {
  let formatedDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: false
  })

  if (formatedDate.includes('cerca de')) {
    formatedDate = formatedDate.slice(8)
  }

  return `Há ${formatedDate}`
}
