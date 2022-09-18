import './scheme1.css'
import { Rect, Text, Circle, Path } from "./svgConstructors";
import uniqid from 'uniqid';
import $ from "jquery";
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import {smartCircle} from './smartCircle';

function createSectorArr (price) { // эта функция лишняя я ее написала вместо запроса с сервера

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
     let count = 0;
     let row = 2;
     let free = 'free';

     for (let i = 0; i < 5; ++i) {
      count +=1;
       if (i === 3)  row -= 1;
       let newPlace = new Place(count, row, free , price)
       arr.push(newPlace)
      }

  return arr

  }



export function Scheme1 () {


  const places = createSectorArr (1000, 3);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svg.setAttribute('viewBox', '0 0 283.82 169.8')
  svg.setAttribute('xmlns',"http://www.w3.org/2000/svg")
  const defs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
  const style = document.createElementNS("http://www.w3.org/2000/svg", 'style');

  style.innerHTML ='.cls-1,.cls-2,.cls-6{fill:none;stroke-miterlimit:10;}.cls-1{stroke:#1d1d1b;}.cls-2{stroke:rgba(20, 13, 14, 0.43);}.cls-3{fill:#b04894;}.cls-4{fill:gray;}.cls-5{font-size:12px;fill:rgba(20, 13, 14, 0.43);font-family:MyriadPro-Regular, Myriad Pro;}.cls-6{stroke:rgba(20, 13, 14, 0.43);}'


  defs.append(style)
  const rect = new Rect('cls-2', 110.38, 1.88,  73.75, 264.5, 'translate(273.28 -109.88) rotate(90)').rect();
  const text = new Text("translate(127.66 165.25)",'Экран', "cls-5").text();
  const path = new Path("cls-6", "M291.75,242.5A447.74,447.74,0,0,1,155.26,266a448.25,448.25,0,0,1-147-22.5", "translate(-8.09 -96.75)").path();

  let circle = [
    new Circle('cls-4', "24.91", "15.75", "12.5", places[0]),
    new Circle('cls-4', "140.16", "15.75", "12.5", places[1]),
    new Circle('cls-4', "253.66", "15.75", "12.5", places[2]),
    new Circle('cls-4', "82.16", "49.88", "12.5", places[3]),
    new Circle('cls-4', "202.66", "49.88", "12.5", places[4]),
  ];


  let circleGroup= smartCircle(circle);
  svg.append(defs,rect, text, path);
  circleGroup.forEach(el => svg.append(el))

  return svg

}
