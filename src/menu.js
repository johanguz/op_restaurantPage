import { from } from "webpack-sources/lib/CompatSource";
import {mainContent} from "./home"

const createMenu = function (){
  const menuElement = document.createElement('div');
  mainContent.appendChild(menuElement);
    menuElement.innerHTML = `<div class='container-fluid justify-content-center p-5'>
    <table class="table-bordered col-12">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Crab Salad</th>
        <td>$5.00</td>
      </tr>
      <tr>
        <th scope="row">Crab Legs</th>
        <td>$12.00</td>
      </tr>
      <tr>
        <th scope="row">Jazz Record</th>
        <td>$15.00</td>
      </tr>
    </tbody>
  </table>
  </div>`
  }

export { createMenu }