import type { MonthYearProps } from '../../types/month-year'

export const MonthYearDisplay = ({ className, month, year, locale = 'en-US' }: MonthYearProps) => {
  const date = new Date(year, month, 1)

  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
  }).format(date)

  return (
    <time className={className} dateTime={`${year}-${(month + 1).toString().padStart(2, '0')}-01`}>
      {formattedDate}
    </time>
  )
}
