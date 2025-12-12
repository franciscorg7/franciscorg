import i18n from '../../config/i18n'
import type { MonthYearProps } from '../../types/month-year'

export const MonthYearDisplay = ({ className, month, year }: MonthYearProps) => {
  const date = new Date(year, month, 1)
  const locale = i18n.language || 'en-US'

  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
  })
    .format(date)
    .replace('.', '')
    .replace(' de ', ' ')

  return (
    <time className={className} dateTime={`${year}-${(month + 1).toString().padStart(2, '0')}-01`}>
      {formattedDate}
    </time>
  )
}
