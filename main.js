'use strict';

const images = [
    {'id': '1','url':'./img/BTS.jpg'},
    {'id': '2','url':'./img/jhope.jpg'},
    {'id': '3','url':'./img/jimin.jpg'},
    {'id': '4','url':'./img/jin.jpg'},
    {'id': '5','url':'./img/jungkook.jpg'},
    {'id': '6','url':'./img/kim.jpg'},
    {'id': '7','url':'./img/kook.jpg'},
    {'id': '8','url':'./img/namjoon.jpg'},
    {'id': '9','url':'./img/suga.jpg'},
    {'id': '10','url':'./img/V.jpg'},


]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);