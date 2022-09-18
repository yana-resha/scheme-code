import './styles/main.css'
import './styles/normalize.css'
import {Scheme2} from './shared/Scheme/Scheme2'
import { PayContainer } from './shared/Scheme/payContainer';
import $ from "jquery";
import 'jquery';
import Navigo from 'navigo';
import DropdownMenu from './shared/DropdownMenu/DropdownMenu';
import { Scheme1 } from './shared/Scheme/Scheme1';


const router = new Navigo('/');






class Hall {
  constructor (name, id) {
    this.name = name;
    this.id = id;
  }
}



function createHeader () {
  const header = document.createElement('header');
  header.classList.add('header')
  const container = createContainer();
  container.classList.add('header__container')
  header.append(container)

  const nav = document.createElement('nav');
  const list = document.createElement('ul');
  const li = document.createElement('li');
  const button = document.createElement('button')
  button.textContent = 'Старт'
  button.id = 'start'
  nav.append(list)
  list.append(li);
  li.append(button);
  container.append(nav);
  return header
}

function createSectionContent () {
  const section = document.createElement('section');
  section.classList.add('section-content')
  const mainContainer = createContainer();
  mainContainer.classList.add('container-svg');

  mainContainer.classList.remove('container')
  const container = document.createElement('div')
  container.classList.add('content');
  mainContainer.append(container)
  section.append(mainContainer)
  return section
}

export function createContainer () {
  const container = document.createElement('div');
  container.classList.add('container')
  return container
}

function createFooter () {
  const footer = document.createElement('footer');
  const block = document.createElement('div');

  block.classList.add('dropdown-pay__block');
  block.id = 'dropdown-pay';
  footer.append(block)

  return footer
}

function getStarted () {
  const header = createHeader();
  const content = createSectionContent ();
  const footer  = createFooter ()
  const dropdown = $('.open-content');
  window.document.body.append(header, content, footer)


  const startButton = $('#start')[0];

  startButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const freeHall = [new Hall('1 зал', 1), new Hall('2 зал', 2)];
    const dropdown = $('.open-content');
    const payContainer = $('.pay-container');

    if ( payContainer.length > 0) payContainer[0].classList.remove('open-content--show');

    if (dropdown.length === 0) {
      const dropdown = DropdownMenu(freeHall);
      header.append(dropdown);
      dropdown.classList.add('open-content--show');
    } else dropdown[0].classList.toggle('open-content--show');
  })
}


getStarted();



const contentContainer = $('.content');
router.on('/scheme/2', function () {

  contentContainer.innerHTML = '';
  contentContainer.append(Scheme2());
});

router.on('/scheme/1', function () {
  contentContainer.innerHTML = '';
  contentContainer.append(Scheme1());
});


router.resolve();


