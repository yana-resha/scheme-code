import { setLocalStoraToTicketForPay } from '../localStorage';
import { PayContainer } from './payContainer';
import $ from "jquery";

export function smartCircle (arr) {

  let payContainer = $('.pay-container');

  if ( payContainer.length === 0) {

    payContainer = PayContainer();
    $('header')[0].append(payContainer);
  } else {
    payContainer = payContainer[0];
    payContainer.classList.remove('open-content--show')
  }
  return arr.map(el => {
    const list = payContainer.querySelector('ul');
    let circle = el.circle();
    circle.addEventListener('click', () => {
      const dropdown = $('.open-content');
      if (dropdown.length > 0) dropdown[0].classList.remove('open-content--show');
      payContainer.classList.add('open-content--show');
      list.innerHTML = '';
      let ticket = [];
      let activeCicle = Array.from(document.querySelectorAll('.active'));
      for (let i = 0; i < arr.length; ++ i) {
        for (let j = 0; j < activeCicle.length; ++j) {
          if (arr[i].infoPlace.id === activeCicle[j].id) {
            ticket.push(arr[i].infoPlace)
          }
        }
      }

      ticket.forEach(el => {
        const button = document.createElement('button');
        const li = document.createElement('li');
        li.append(button)
        button.textContent = `ряд: ${el.row} место: ${el.number} цена: ${el.price}`;
          list.append(li);
      })
      let notActive = Array.from(document.querySelectorAll("circle:not(.active)"))
      ticket.length >= 5 ? notActive.forEach(el => el.style.pointerEvents = 'none') : notActive.forEach(el => el.style.pointerEvents = 'auto');
      if (ticket.length === 0) payContainer.classList.remove('open-content--show');
      setLocalStoraToTicketForPay(ticket)
    })
    return circle
  })
}
