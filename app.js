const modalBtn = document.querySelector('.modal-close')
const overlay = document.querySelector('.overlay')
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`

// let employees = []



const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
     let myObj = JSON.parse(xhr.responseText);
      let employees = myObj.results
      let cardHTML = '<div class="card">'
      for(let i = 0; i < employees.length; i++) {
        cardHTML += `<img src=${employees[i].picture.large} alt=${employees[i].name.first}></div>`;
        document.querySelector('.grid-container').innerHTML = cardHTML
        console.log(cardHTML)
      }
    } 
  }
};
xhr.open('GET', urlAPI);
xhr.send()

modalBtn.addEventListener('click', () => {
  overlay.classList.add('hidden')
})

//  <div class="text-container">
//           <h2 class="name">Haleigh Macchiraell</h2>
//           <p class="emial">dtucker@asdsd.com</p>
//           <p class="address">Chicago</p>
//         </div>