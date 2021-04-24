const modalBtn = document.querySelector('.modal-close')
const overlay = document.querySelector('.overlay')
const APIUrl = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector('.grid-container')
const input = document.getElementById('search')
let employees = []


function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => console.log(err))
}

  fetchData(APIUrl)
    .then(data => displayEmployees(data))


  const displayEmployees = data => {
    employees = data;
    let employeeHTML = ''
    
    employees.forEach((employee, index) => {
      let name = employee.name;
      let email = employee.email;
      let city = employee.location.city;
      let picture = employee.picture;

    employeeHTML += `
       <div class="card" index=${index}>
          <div class="card-container">
          <img class="${name.first} profile" src=${picture.large} />
          <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="city">${city}</p>
          </div>
         </div>
        </div>`
      }) 
      gridContainer.innerHTML = employeeHTML; 
      handleModal()
  }

  const displayModal = (index) => {
    let { picture, name, email, dob, location: { city, street, state, postcode }, phone } = employees[index]

    let modalHTML = '';
    modalHTML += `
    <div class="modal">
      <button class="modal-close">X</button>
        <div class="modal-container">
        <img src=${picture.large}" alt="${name.first}">
        <div class="text-container">
          <h2 class="name">${name.first} ${name.last}</h2>
          <p class="email">${email}</p>
          <p class="address">${location.city}</p>
          <hr/>
          <p>${phone}</p>
          <p class="address">${location.street}, ${location.state} ${location.postcode}</p>
          // <p>Birthday: </p>
        </div>
      </div>
    </div>`

    overlay.innerHTML = modalHTML;
    modalBtn.addEventListener('click', () => {
    overlay.classList.add('hidden')
  })
}


  const handleModal = () => {
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
    card.addEventListener('click', e => {
      const employee = e.target.closest('.card');
      console.log(employee);
      const index = employee.getAttribute('index')

      displayModal(index)
    })
  })
  }
// Search function
const handleSearch = e => {
  let inputValue = e.target.value.toLowerCase()
   let names = document.querySelectorAll('.name')

   for(let i = 0; i < names.length; i++) {
     let person = names[i]
     let name = person.innerHTML.toLowerCase();
     name.includes(inputValue) ? person.style.display = 'inline' : person.parentNode.parentNode.parentNode.style.display = 'none'
     if(inputValue === '') {
       person.parentNode.parentNode.parentNode.style.display = 'inline'
     }
   }
}

input.addEventListener('keyup', handleSearch)


