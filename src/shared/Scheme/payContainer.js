import { createContainer } from "../../index";
import { getLocalStorageTicketForPay } from "../localStorage";

export function PayContainer () {

  const block = document.createElement('div');
  block.classList.add('pay-container');

  const container = createContainer();
  container.classList.add('for-pay')

  const ul = document.createElement('ul');
  const button = document.createElement('button');
  button.textContent = 'Оплатить';
  button.addEventListener('click', () => {
  block.classList.remove('open-content--show');
  const info = getLocalStorageTicketForPay('ticket');

  let sum = info.reduce((accum, el) =>  {
    return accum += el.price
  },0)

  let text = `к опате ${sum}`
  alert(text)

 })
 container.append(ul, button)
 block.append(container);
 return block;
}
