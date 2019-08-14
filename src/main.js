import {getTripInfo} from './components/trip-info';
import {getMenu} from './components/menu';
import {getFilter} from './components/filter';
import {getEventsSort} from './components/events-sort';
import {getContent} from './components/content';
import {getDay} from './components/trip-day';

const tripControlsElement = document.querySelector(`.trip-main__trip-controls`);
const tripInfoCostElement = document.querySelector(`.trip-info__cost`);
const tripEventsElement = document.querySelector(`.trip-events`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const testDays = [
  {number: 1, date: `2019-07-08`, events: [
    {title: `Вылет из Шереметьева`, cost: 200},
    {title: `Берем машину в аэропорту`, cost: 500},
    {title: `Прибываем в апартаменты во Флоренции`, cost: 375}]},
  {number: 2, date: `2019-07-09`, events: [
    {title: `Уфицы`, cost: 20},
    {title: `Обед в ресторане "Osteria dei Centopoveri"`, cost: 200}]},
  {number: 3, date: `2019-07-10`, events: [
    {title: `Выезжаем в Сиену`, cost: 0}]}];

const prepareSite = () => {
  render(tripInfoCostElement, getTripInfo(), `beforebegin`);
  render(tripControlsElement, getMenu());
  render(tripControlsElement, getFilter());
  render(tripEventsElement, getEventsSort());
  render(tripEventsElement, getContent());
  const tripContentElement = document.querySelector(`.trip-days`);
  testDays.forEach(({number, date, events}) => {
    const day = getDay(number, date, events);
    render(tripContentElement, day);
  });
};

prepareSite();
