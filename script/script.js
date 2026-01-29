const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const items = document.querySelectorAll('.deadline-format h1');
const head = document.querySelector('.section-header');

// setting the date for the launching day
const launchingDate = new Date(2026, 1, 18, 0, 0, 0);

// launching day in milisecond
const launchingTime = launchingDate.getTime();

function countdown() {
  const now = new Date().getTime();

  const t = launchingTime - now;

  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculating all days, hours, minutes, seconds
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    return item < 10 ? `0${item}` : `${item}`;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(interval);
    head.innerHTML = 'We are officially launching the website';
    head.style.letterSpacing = '0.1rem';

    items.forEach(function (item) {
      item.innerHTML = '00';
    });
  }
}

let interval = setInterval(countdown, 1000);

countdown();
