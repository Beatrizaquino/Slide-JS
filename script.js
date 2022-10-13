'use strict';

const images = [
  {'id':'1','url':'./img/image1.jpg'},
  {'id':'2','url':'./img/image2.jpg'},
  {'id':'3','url':'./img/image3.jpg'},
  {'id':'4','url':'./img/image4.jpg'},
  {'id':'5','url':'./img/image5.jpg'},

]

const conteinerItems = document.querySelector('#conteiner_items');


const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, conteinerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    conteinerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    conteinerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);