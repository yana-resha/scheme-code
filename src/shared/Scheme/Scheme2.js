import './scheme2.css'
import uniqid from 'uniqid';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { setLocalStoraToTicketForPay } from '../localStorage';
import $ from "jquery";
import {smartCircle} from './smartCircle';
import {Rect, Circle, Text, Path} from './svgConstructors';
import {PayContainer } from './payContainer';


function createSectorArr (price, countRow) { // эта функция лишняя я ее написала вместо запроса с сервера

class Place {
  constructor (number, row, status, price) {
    this.number = number;
    this.row = row;
    this.status = status;
    this.price = price;
    this.id = uniqid();
    }
  }

   let arr = [];
   let count = 1;
   let row = 4;
   let free = 'free';

   for (let i = 0; i < countRow; ++i) {
     row -= 1;
     let newPlace = new Place(count, row, free , price)
     arr.push(newPlace)
    }

    return arr
}


export function Scheme2 () {

  const leftPlaces = createSectorArr (500, 4)
  const rigthPlaces = createSectorArr (1000, 4)



  const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svg.setAttribute('viewBox', '0 0 448.1 370.44')
  svg.setAttribute('xmlns',"http://www.w3.org/2000/svg")
  const defs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');

  const rectleft = new Rect('cls-1', 78.5, 0.5, 110.5, 291, '').rect();
  const rectRigth = new Rect('cls-1', 274.5, 0.5, 110.5, 291, '').rect();

  const text2 = new Text("translate(215 349.46)",'Экран', "cls-3").text();

  let leftSectorCircle = [
    new Circle('cls-7', "133.75", "35.75", "15.62", leftPlaces[0]),
    new Circle('cls-7', "133.75", "135", "15.62", leftPlaces[1]),
    new Circle('cls-7', "133.75", "239.12", "15.62", leftPlaces[2])
  ]


  let rigthSectorCircle = [
    new Circle('cls-0', "329.75", "35.75", "15.62", rigthPlaces[0]),
    new Circle('cls-0', "329.75", "135", "15.62", rigthPlaces[1]),
    new Circle('cls-0', "329.75", "239.12", "15.62", rigthPlaces[2])
  ]

  const path = new Path("cls-4", "M477,342.5A1151.54,1151.54,0,0,1,249.5,365a1152,1152,0,0,1-210-19.5", "translate(-25 0.5)").path();


  let arr =[...leftSectorCircle, ...rigthSectorCircle];




  svg.append(defs, rectleft, text2, path, rectRigth);

  let placeArr = smartCircle(arr);
  placeArr.forEach(el => svg.append(el));




  return svg
}

