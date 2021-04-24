const modalBtn = document.querySelector('.modal-close')
const modal= document.querySelector('.modal')
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

//Display Employees
  const displayEmployees = data => {
    employees = data;
    let employeeHTML = ''
    
    // employees.forEach((employee, index) => {
    //   let name = employee.name;
    //   let email = employee.email;
    //   let city = employee.location.city;
    //   let picture = employee.picture;

    gridContainer.innerHTML = employees.map((employee, index) => {
      const {name, email, location, picture} = employee;
      return 'hello'
    })

    // employeeHTML += `
    //    <div class="card" index=${index}>
    //       <div class="card-container">
    //       <img class="${name.first} profile" src=${picture.large} />
    //       <div class="text-container">
    //         <h2 class="name">${name.first} ${name.last}</h2>
    //         <p class="email">${email}</p>
    //         <p class="city">${city}</p>
    //       </div>
    //      </div>
    //     </div>`
    //   }) 
    //   gridContainer.innerHTML = employeeHTML; 
    //   handleModal()
  }
//Modal 
  const displayModal = (index) => {
    let { picture, name, email, dob, location = { city, street, state, postcode }, phone } = employees[index]
      const person = employees[index]

    let modalHTML = '';
    modalHTML += `
      <div className="container">
      <button class='prevBtn btn'><</button>
        <img src=${picture.large} alt="${name.first}">
        <button class='nextBtn btn'>></button>
        <div class="text-container">
          <h2 class="name">${name.first} ${name.last}</h2>
          <p class="email">${email}</p>
          <p class="city">${location.city}</p>
          <hr/>
          <p class='phone'>${phone}</p>
          <p class="address">${location.street.number} ${location.street.name}, ${location.state} ${location.postcode}</p>
         <p class='bday'>Birthday: ${dob.date} </p>
      </div>
    </div>`
    
    overlay.classList.remove("hidden");
    modal.insertAdjacentHTML('beforeend', modalHTML);
}

const handleModal = () => {
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
    card.addEventListener('click', e => {
      const employee = e.target.closest('.card');
      const index = employee.getAttribute('index')

      displayModal(index)
    })
  })
}

// Modal Buttons 


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
 
modalBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});




