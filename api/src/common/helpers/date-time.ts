import * as moment from 'moment-timezone';

export const getTime = (): string =>
  moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm');
