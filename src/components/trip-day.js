import {getEventsList} from './event';

export const getDay = (number, date, eventsInfo) => {
  const eventsList = getEventsList(eventsInfo);
  return `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">${number}</span>
    <time class="day__date" datetime="${date}">MAR 18</time>
  </div>

  <ul class="trip-events__list">
    ${eventsList}
  </ul>
</li>`;
};
