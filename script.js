const ratingNumbersDOM = document.querySelectorAll('.card__rating-number');
const mainCardDom = document.querySelector('.card--main');
const thankYouCardDOM = document.querySelector('.card--thank-you');
const resultValueDOM = document.querySelector('.card__result-value');

let activeRatingNumber;

function selectRating(number) {
  const ratingNumbersDOM = document.querySelectorAll('.card__rating-number');
  const selectedRatingNumberDOM = ratingNumbersDOM[number - 1];

  if (activeRatingNumber) {
    const activeRatingDom = ratingNumbersDOM[activeRatingNumber - 1];
    activeRatingDom.classList.remove('card__rating-number-active');
  }
  selectedRatingNumberDOM.classList.add('card__rating-number-active');
  activeRatingNumber = number;
}

function submit() {
  if (activeRatingNumber) {
    mainCardDom.classList.add('hide');
    thankYouCardDOM.classList.remove('hide');
    resultValueDOM.textContent = activeRatingNumber;
  }
}
