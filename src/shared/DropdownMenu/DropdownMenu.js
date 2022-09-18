import './dropdownMenu.css'
import $ from "jquery";
import 'jquery';
import Navigo from 'navigo';
import { Scheme2 } from '../Scheme/Scheme2';
import { Scheme1 } from '../Scheme/Scheme1';
const router = new Navigo('/');


 export default function DropdownMenu (content = []) {

  const mainContainer = document.createElement('div');
  const container =  document.createElement('div');
  mainContainer.classList.add('open-content')
  container.classList.add('container', 'dropdown-container')
  mainContainer.id = 'opencontent';
  const hallList = document.createElement('ul');
  hallList.classList.add('dropdown-list')
  container.append(hallList)


  content.forEach(el => {
    const contentButton = document.createElement('button');
    contentButton.textContent = `${el.name}`;
    const li = document.createElement('li');

    li.append(contentButton);
    contentButton.addEventListener('click', () => {
      window.history.pushState({}, '', `/scheme/${el.id}`);
      router.navigate(`/scheme/${el.id}`);
    })
    hallList.append(li);
  });

  mainContainer.append(container)
  return mainContainer
}


router.on('/scheme/2', function () {
  const contentContainer = $('.content')[0]
  contentContainer.innerHTML = '';
  contentContainer.append(Scheme2());
  const dropdown = $('.open-content')[0];
  dropdown.classList.remove('open-content--show')
});


router.on('/scheme/1', function () {
  const contentContainer = $('.content')[0]
  contentContainer.innerHTML = '';
  contentContainer.append(Scheme1());
  const dropdown = $('.open-content')[0];
  dropdown.classList.remove('open-content--show')

});

