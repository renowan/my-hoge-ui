import {
  format as formatByDateFns,
  parse as parseByDateFns,
  parseISO as parseISOByDateFns,
  startOfYear as startOfYearByDateFns,
  startOfMonth as startOfMonthByDateFns,
  endOfMonth as endOfMonthByDateFns,
  differenceInCalendarYears,
  differenceInCalendarDays,
  differenceInMonths,
  differenceInDays,
  differenceInMinutes,
  addMonths as addMonthsByDateFns,
  addYears as addYearsByDateFns,
  addDays as addDaysByDateFns,
  subDays as subDaysByDateFns,
  subMonths as subMonthsByDateFns,
  subYears as subYearsByDateFns,
  isBefore as isBeforeByDateFns,
  isAfter as isAfterByDateFns,
  formatISO as formatISOByDateFns,
  isSameMonth as isSameMonthByDateFns,
  isSameDay as isSameDayByDateFns,
  getYear as getYearByDateFns,
  setYear as setYearByDateFns,
  getMonth as getMonthByDateFns,
  setMonth as setMonthByDateFns,
  endOfDay as endOfDayByDateFns,
  set as setByDateFns,
  getTime as getTimeByDateFns,
} from 'date-fns'
import isDate from 'lodash/isDate'
import isString from 'lodash/isString'

enum Locale {
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Id = 'id',
  Ja = 'ja',
  Th = 'th',
  Vi = 'vi',
  ZhChs = 'zh_CHS'
}


const isValidDate = <T>(date: T | null | undefined): date is T => {
  const isValid = date !== null && date !== undefined

  if (!isValid) {
    console.warn('invalid date', date)
  }

  return isValid
}

// date-fnsに対する対応のため、ファイル外で使用しない。WOVN依存がなくなったら不要となる。
const formatLocale = (locale: Locale): string => {
  switch (locale) {
    // WOVN has specified simplified Chinese as `zh-CHS`, but date-fns says its not valid, so using zh-CH instead.
    // https://wovn-support.zendesk.com/hc/ja/articles/360007709372?wovn=en
    case Locale.ZhChs:
      return 'zh-CH'
    default:
      return locale
  }
}

const displayDateExact = (date: Date | string | null | undefined): string => {
  if (isString(date)) {
    try {
      const parsed = parseISOByDateFns(date)
      return formatByDateFns(parsed, 'yyyy/MM/dd HH:mm:ss')
    } catch (err) {
      console.warn('invalid date', date)
      return ''
    }
  }

  if (isDate(date)) {
    return formatByDateFns(date, 'yyyy/MM/dd HH:mm:ss')
  }

  console.warn('invalid date', date)
  return ''
}

const parseYyyyMm = (date: string | null | undefined): Date => {
  if (!isValidDate(date)) return new Date()

  return parseByDateFns(date, 'yyyy-MM', new Date())
}

const formatYyyy = (date: Date | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'yyyy')
}

const formatYyyyMm = (date: Date | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'yyyy-MM')
}

const parseYyyyMmDd = (date: string | null | undefined): Date => {
  if (!isValidDate(date)) return new Date()

  return parseByDateFns(date, 'yyyy-MM-dd', new Date())
}

// TODO: this must be fixed on db and api level
const formatYyyyMmDd = (date: Date | null | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'yyyy-MM-01')
}

const formatYyyyMmDdHhMmSs = (date: Date | null | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'yyyy-MM-dd HH:mm:ss')
}

const formatYyyyMmDdHhMm = (date: Date | null | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'yyyy-MM-dd HH:mm')
}

const formatTimeOnly = (date: Date | null): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'HH:mm')
}

const formatLocalizedMonth = (
  date: string | null | undefined,
  currentLocale: Locale,
  monthFormat: Intl.DateTimeFormatOptions['month'] = 'short',
): string => {
  if (!isValidDate(date)) return ''

  const locale = formatLocale(currentLocale)

  return new Intl.DateTimeFormat(locale, { month: monthFormat }).format(
    toDate(date),
  )
}

const formatYear = (
  date: string | null | undefined,
  currentLocale: Locale,
  yearFormat: Intl.DateTimeFormatOptions['year'] = 'numeric',
): string => {
  if (!isValidDate(date)) return ''

  const locale = formatLocale(currentLocale)
  if (locale === Locale.Th) {
    // Thai year format is 'พ.ศ. 2565' instead of what we want - '2022'
    return new Intl.DateTimeFormat(Locale.En, { year: yearFormat }).format(
      toDate(date),
    )
  }

  return new Intl.DateTimeFormat(locale, { year: yearFormat }).format(
    toDate(date),
  )
}

const formatYearMonth = (
  date: string | null | undefined,
  currentLocale: Locale,
  yearFormat: Intl.DateTimeFormatOptions['year'] = 'numeric',
  monthFormat: Intl.DateTimeFormatOptions['month'] = 'short',
): string => {
  if (!isValidDate(date)) return ''

  const locale = formatLocale(currentLocale)
  if (locale === 'th') {
    // Use month from thai, and year from english to avoid mixing up thai year calculations
    const year = new Intl.DateTimeFormat('en', { year: yearFormat }).format(
      toDate(date),
    )
    const month = new Intl.DateTimeFormat('th', { month: monthFormat }).format(
      toDate(date),
    )
    return `${month} ${year}`
  }

  return new Intl.DateTimeFormat(locale, {
    year: yearFormat,
    month: monthFormat,
  }).format(toDate(date))
}

const formatMonthDay = (
  date: string | null | undefined,
  currentLocale: Locale,
  monthFormat: Intl.DateTimeFormatOptions['month'] = 'long',
  dayFormat: Intl.DateTimeFormatOptions['day'] = 'numeric',
): string => {
  if (!isValidDate(date)) return ''

  const locale = formatLocale(currentLocale)
  if (locale === 'th') {
    // For Thai language, use Buddhist calendar year
    return new Intl.DateTimeFormat('th', {
      month: monthFormat,
      day: dayFormat,
    }).format(toDate(date))
  }

  return new Intl.DateTimeFormat(locale, {
    month: monthFormat,
    day: dayFormat,
  }).format(toDate(date))
}

const formatDateTime = (
  date: Date | number | null,
  currentLocale: Locale,
  dateStyle: Intl.DateTimeFormatOptions['dateStyle'] = 'long',
): string => {
  if (!isValidDate(date)) return ''

  const locale = formatLocale(currentLocale)

  return new Intl.DateTimeFormat(locale, {
    dateStyle,
  }).format(date)
}

const formatToStartOfMonth = (date: Date | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(startOfMonthByDateFns(date), 'yyyy-MM-dd')
}

const formatToEndOfMonth = (date: Date | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(endOfMonthByDateFns(date), 'yyyy-MM-dd')
}

const formatRange = (d1: Date, d2: Date, currentLocale: Locale) => {
  return `${formatDateTime(d1, currentLocale, 'full')} ${formatTimeOnly(
    d1,
  )} ~ ${formatTimeOnly(d2)}`
}

const diffInCalendarYears = (date1: string, date2: string): number | null => {
  if (!isValidDate(date1)) return null
  if (!isValidDate(date2)) return null

  return differenceInCalendarYears(toDate(date1), toDate(date2))
}

const diffInCalendarDays = (date1: string, date2: string): number | null => {
  if (!isValidDate(date1)) return null
  if (!isValidDate(date2)) return null

  return differenceInCalendarDays(toDate(date1), toDate(date2))
}

const diffInMonths = (date1: string, date2: string): number | null => {
  if (!isValidDate(date1)) return null
  if (!isValidDate(date2)) return null

  return differenceInMonths(toDate(date1), toDate(date2))
}

const diffInDays = (dateLeft: string, dateRight: string): number | null => {
  if (!isValidDate(dateLeft)) return null
  if (!isValidDate(dateRight)) return null

  return differenceInDays(toDate(dateLeft), toDate(dateRight))
}

const diffInMinutes = (date1: string, date2: string): number | null => {
  if (!isValidDate(date1)) return null
  if (!isValidDate(date2)) return null

  return differenceInMinutes(toDate(date1), toDate(date2))
}





const formatYyyyMmDdAs = (date: Date | null | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(date, 'yyyy-MM-dd')
}

const getCurrentDate = (): string => {
  return formatISOByDateFns(new Date())
}

const getDate = (options?: {
  year?: number
  month?: number
  date?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}): string => {
  const currentDate = new Date()

  if (options) {
    // monthは0-11のため、1引いて対応する
    const month = options?.month ? options.month - 1 : undefined
    return formatISOByDateFns(setByDateFns(currentDate, { ...options, month }))
  }

  return formatISOByDateFns(currentDate)
}

const getUnixTime = (...args: (string | undefined)[]): number | null => {
  // レストパラメータによって引数の省略を区別
  if (args.length === 0) {
    return Date.now()
  }

  const [date] = args

  if (!isValidDate(date)) return null

  return getTimeByDateFns(toDate(date))
}

const isSameMonth = (date1: string, date2: string): boolean => {
  if (!isValidDate(date1)) return false
  if (!isValidDate(date2)) return false

  return isSameMonthByDateFns(toDate(date1), toDate(date2))
}

const isSameDay = (date1: string, date2: string): boolean => {
  if (!isValidDate(date1)) return false
  if (!isValidDate(date2)) return false

  return isSameDayByDateFns(toDate(date1), toDate(date2))
}

const startOfYear = (date: string | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(startOfYearByDateFns(toDate(date)))
}

const startOfMonth = (date: string | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(startOfMonthByDateFns(toDate(date)))
}

const endOfMonth = (date: string | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(endOfMonthByDateFns(toDate(date)))
}

const endOfDay = (date: string | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(endOfDayByDateFns(toDate(date)))
}

const addYears = (date: string | undefined, amount: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(addYearsByDateFns(toDate(date), amount))
}

const addMonths = (date: string | undefined, amount: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(addMonthsByDateFns(toDate(date), amount))
}

const addDays = (date: string | undefined, amount: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(addDaysByDateFns(toDate(date), amount))
}

const subYears = (date: string | undefined, amount: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(subYearsByDateFns(toDate(date), amount))
}

const subMonths = (date: string | undefined, amount: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(subMonthsByDateFns(toDate(date), amount))
}

const subDays = (date: string | undefined, amount: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(subDaysByDateFns(toDate(date), amount))
}

const getYear = (date: string | undefined): number | null => {
  if (!isValidDate(date)) return null

  return getYearByDateFns(toDate(date))
}

const setYear = (date: string, year: number): string => {
  return formatISOByDateFns(setYearByDateFns(toDate(date), year))
}

const getMonth = (date: string | undefined): number | null => {
  if (!isValidDate(date)) return null

  return getMonthByDateFns(toDate(date))
}

const setMonth = (date: string | undefined, month: number): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(setMonthByDateFns(toDate(date), month))
}

const format = (date: string | undefined, formatString: string): string => {
  if (!isValidDate(date)) return ''

  return formatByDateFns(toDate(date), formatString)
}

const formatISO = (date: string | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(toDate(date))
}

const isAfter = (
  date: string | undefined,
  dateToCompare: string | undefined,
): boolean => {
  if (!isValidDate(date)) return false
  if (!isValidDate(dateToCompare)) return false

  return isAfterByDateFns(toDate(date), toDate(dateToCompare))
}

const isBefore = (
  date: string | undefined,
  dateToCompare: string | undefined,
): boolean => {
  if (!isValidDate(date)) return false
  if (!isValidDate(dateToCompare)) return false

  return isBeforeByDateFns(toDate(date), toDate(dateToCompare))
}

const parse = (date: string | undefined, formatString: string): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(parseByDateFns(date, formatString, new Date()))
}

const parseISO = (date: string | undefined): string => {
  if (!isValidDate(date)) return ''

  return formatISOByDateFns(parseISOByDateFns(date))
}

// オーバーロードシグネチャを定義（アロー関数だとうまく定義できないのでfunctionで記述）
function toDate(date: string): Date
function toDate(date: null | undefined): undefined
function toDate(date: string | null | undefined): Date | undefined {
  if (!isValidDate(date)) return
  if (!isString(date)) {
    console.warn('invalid parameter', date)
    return date
  }

  return parseISOByDateFns(date)
}

function toISOString(date: Date): string
function toISOString(date: null | undefined): undefined
function toISOString(date: Date | null | undefined): string | undefined {
  if (!isValidDate(date)) return
  if (!isDate(date)) {
    console.warn('invalid parameter', date)
    return date
  }

  return date.toISOString()
}

// ISO 8601形式の日付文字列かどうかを判定する
const isValidISODate = (
  dateStr: string,
  format: string = 'yyyy-MM-dd',
): boolean => {
  const d = new Date(dateStr)
  try {
    const formatDate = formatByDateFns(d, format)
    return dateStr === formatDate
  } catch (error) {
    return false
  }
}

export default {
  displayDateExact,
  parseYyyyMm,
  parseYyyyMmDd,
  formatYyyy,
  formatYyyyMm,
  formatYyyyMmDd,
  formatYyyyMmDdHhMmSs,
  formatYyyyMmDdHhMm,
  formatTimeOnly,
  formatLocalizedMonth,
  formatMonthDay,
  formatYear,
  formatYearMonth,
  formatDateTime,
  formatToStartOfMonth,
  formatToEndOfMonth,
  formatRange,
  diffInCalendarYears,
  diffInCalendarDays,
  diffInMonths,
  diffInDays,
  diffInMinutes,
  formatYyyyMmDdAs,
  getCurrentDate,
  getDate,
  getUnixTime,
  isSameMonth,
  isSameDay,
  startOfYear,
  startOfMonth,
  endOfMonth,
  endOfDay,
  addYears,
  addMonths,
  addDays,
  subDays,
  subYears,
  subMonths,
  getYear,
  setYear,
  getMonth,
  setMonth,
  format,
  formatISO,
  isAfter,
  isBefore,
  parse,
  parseISO,
  toDate,
  toISOString,
  isValidISODate,
}
