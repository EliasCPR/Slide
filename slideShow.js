'use strict';

const images = [
    { 'id': '1', 'url':'./img/DBSuper.jpg' },
    { 'id': '2', 'url':'./img/kimetsu.jfif' },
    { 'id': '3', 'url':'./img/jujutsu.jfif' },
    { 'id': '4', 'url':'./img/chrono.jpg' },
    { 'id': '5', 'url':'./img/inuyasha.jpg' },
    { 'id': '6', 'url':'./img/tenchi.jpg' },
    { 'id': '7', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '8', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '9', 'url':'./img/ippo.png' },
    { 'id': '10', 'url':'./img/bleach.jfif' },
 
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

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);