const mainContent = document.querySelector("div#content");

const createHeader = function (){
  const header = document.createElement('div');
  mainContent.appendChild(header)
    header.innerHTML = `
    <div class="container-fluid">
      <div class="row col-12 text-center">
        <h1>Jojo's Crab Shack and Records</h1>
      </div>
    </div>`;
}

const mainImage = function () {
  const image = document.createElement('div')
  mainContent.appendChild(image)
    image.innerHTML = `<div class="container-fluid">
    <div class="row img-fluid">
      <img src="./img/zoltan-tasi-KZcCPO9cjD0-unsplash.jpg" alt="the shack">
    </div>
  </div>`
 }
 
const mainText = function () {
  const text = document.createElement('div');
  mainContent.appendChild(text);
    text.innerHTML = `
    <div class="container-fluid">
    <div class="row">
    <p class="text-center">
      When hunger pangs strike, and the ear is in need of embrace.<br> Come to Jojo's Crab Shack and Records, located by the sea.
    </p>
    </div></div>
    `
}

const createNav = function (){
  const nav = document.createElement('div');
  mainContent.appendChild(nav);
    nav.innerHTML = `
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>`
}
export {createHeader, mainImage, mainText, mainContent, createNav}
