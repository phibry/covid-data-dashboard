/**
 * This function formats a date as desired. Days and months with only one character, are completed with a 0.
 * You pass a date object, a delimeter parameter and specify whether the date should be reversed.
 * @example getCurrentDateFormatted(new Date('8.2.21'), '-', true)) will return '2021-08-02'
 * @param date Date-object
 * @param delimeter delimeter to specify the boundary between regions of date
 * @param reverse boolean to specify whether the date should be reversed
 * @returns Returns the specified date format as a string
 */
export const getCurrentDateFormatted = (
  date: Date,
  delimeter: string,
  reverse: boolean
) => {
  const dateArray = date.toLocaleDateString('de-CH').split('.');

  if (dateArray[0].length === 1) dateArray[0] = '0' + dateArray[0];
  if (dateArray[1].length === 1) dateArray[1] = '0' + dateArray[1];

  return reverse
    ? dateArray.reverse().join(`${delimeter}`)
    : dateArray.join(`${delimeter}`);
};

/**
 * Returns the previous day
 * @param dateString A string formatted as 'yyyy-mm-dd'
 * @returns returns a string in the format: 'yyyy-mm-dd'
 */
export const getPreviousDateFormatted = (dateString: string) => {
  const dateArray = dateString.split('-');

  // yyyy-01-01 to yyyy-12-31
  if (dateArray[2] === '01') {
    if (dateArray[1] === '01') {
      dateArray[0] = (parseInt(dateArray[0]) - 1).toString();
      dateArray[1] = '12';
      dateArray[2] = '31';
    } else {
      // check month
      const previousMonth = parseInt(dateArray[1]) - 1;
      dateArray[1] = (parseInt(dateArray[1]) - 1).toString();

      if (dateArray[1].length === 1) {
        dateArray[1] = '0' + dateArray[1];
      }

      if (longMonths.includes(previousMonth)) {
        dateArray[2] = '31';
      } else if (shortMonths.includes(previousMonth)) {
        dateArray[2] = '30';
      } else {
        isLeapYear(parseInt(dateArray[0]))
          ? (dateArray[2] = '29')
          : (dateArray[2] = '28');
      }
    }
  } else {
    dateArray[2] = '0' + (parseInt(dateArray[2]) - 1).toString();
  }

  return dateArray.join('-');
};

/**
 * This function indicates whether a 4-digit year is a leap year or not.
 * @param year Year(yyyy) as number
 * @returns boolean
 */
const isLeapYear = (year: number): boolean => {
  return (0 === year % 4 && 0 !== year % 100) || 0 === year % 400;
};

const longMonths = [1, 3, 5, 7, 8, 10, 12];
const shortMonths = [4, 6, 9, 11];
