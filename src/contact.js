import {mainContent} from './home'
const createContact = function (){
  const contactElement = document.createElement('div');
  mainContent.appendChild(contactElement);
    contactElement.innerHTML =`
<div class="container-fluid">
<div class="row">
<h3 class="p-5 col-6 text-center">If you'd like to reach the proprietor please leave a note inside of a sea shell outside the shack, addressed to JoJo.</h1>
  <h3 class="p-5 col-6 text-center">Otherwise, email <a href="mailto:jojo@aol.com">jojo@aol.com</a> </h3>
</div>
</div>
</div>
    `
}

export {createContact}