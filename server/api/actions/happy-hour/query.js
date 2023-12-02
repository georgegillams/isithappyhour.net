import reqSecure from 'server-utils/common/reqSecure';
import { utcToZonedTime } from 'date-fns-tz';
import timeZones from './time-zones.json';
import { isHappyHour } from 'helpers/happy-hour';

const formatPlace = place => place && place.split('_').join(' ');

const formatLocation = timeZone => {
  const timeZoneSplit = timeZone.split('/');
  const location = formatPlace(timeZoneSplit.pop());
  const secondaryLocation = formatPlace(timeZoneSplit.pop());
  if (secondaryLocation) {
    return `${location} (${secondaryLocation})`;
  }
  return location;
};

const getTimezone = () => {
  const now = new Date();
  const shuffledTimeZones = timeZones.sort(() => 0.5 - Math.random());
  for (let timeZone of shuffledTimeZones) {
    const dateInTimeZone = utcToZonedTime(now, timeZone);
    if (isHappyHour(dateInTimeZone)) {
      return {
        timeZone,
        dateInTimeZone,
        location: formatLocation(timeZone),
        hoursInTimeZone: String(dateInTimeZone.getHours()).padStart(2, '0'),
        minutesInTimeZone: String(dateInTimeZone.getMinutes()).padStart(2, '0'),
      };
    }
  }
};

export default function query(req) {
  return (async () => {
    reqSecure(req, []);
    const result = getTimezone();
    // const ip = '1234';
    // const geo = await fetch(`https://tools.keycdn.com/geo.json?host=${ip}`);
    return { ...result };
  })();
}
