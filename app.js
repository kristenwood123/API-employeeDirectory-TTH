const modalBtn = document.querySelector('.modal-close')
const overlay = document.querySelector('.overlay')
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`

let employees = []



const xhr = new XMLHttpRequest()


xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    document.querySelector('.grid-container').innerHTML = xhr.responseText;
  }
};
xhr.open('GET', urlAPI);
xhr.send()





modalBtn.addEventListener('click', () => {
  overlay.classList.add('hidden')
})