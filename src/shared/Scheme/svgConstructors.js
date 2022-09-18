import tippy from 'tippy.js';



export class Rect {
  figure = 'rect';
  constructor (nameClass, x, y, width, heigth, transform) {
    this.nameClass = nameClass;
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.transform = transform;
  }

  rect() {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", `${this.figure}`);
    rect.setAttribute('x', `${this.x}`);
    rect.setAttribute('y', `${this.y}`);
    rect.setAttribute('width', `${this.width}`);
    rect.setAttribute('heigth', `${this.heigth}`);
    rect.setAttribute('class', `${this.nameClass}`);
    rect.setAttribute('transform', `${this.transform}`)
    return rect
  }
}


export class Text {
  figure = 'text';
  constructor (transform, textContent, className) {
    this.transform = transform;
    this.textContent = textContent;
    this.className = className;
  }

  text() {
    const text = document.createElementNS("http://www.w3.org/2000/svg", `${this.figure}`);
    text.setAttribute('transform', this.transform)
    text.setAttribute('class', this.className);
    text.textContent = `${this.textContent}`
    return text
  }
}
export class Path {
  figure = 'path';
  constructor (className, coordinate, transform) {
    this.className = className;
    this.coordinate = coordinate;
    this.transform = transform;
  }
  path() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", `${this.figure}`);
    path.setAttribute('class', this.className)
    path.setAttribute('d', this.coordinate)
    path.setAttribute('transform', this.transform)

    return path
  }
}


export class Circle {
  figure = 'circle';
  constructor (className, x, y,r, infoPlace) {

    this.className = className;
    this.x = x;
    this.y = y;
    this.r = r;
    this.infoPlace = infoPlace;
  }

  circle() {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", `${this.figure}`);
    circle.setAttribute('cx', this.x);
    circle.setAttribute('id', this.infoPlace.id);
    circle.setAttribute('cy', this.y);
    circle.setAttribute('r', this.r);
    circle.setAttribute('class', this.className);
    tippy(circle, {content: `ряд: ${this.infoPlace.row} место: ${this.infoPlace.number} цена: ${this.infoPlace.price} `, theme: 'my-theme'});
    circle.addEventListener('click', () => {
      circle.classList.toggle('active')
    })
    return circle;
  }
}



