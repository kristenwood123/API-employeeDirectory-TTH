const modalBtn = document.querySelector('.modal-close')
const modal = document.querySelector('#modal-container')
const overlay = document.querySelector('.overlay')
const APIUrl = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector('.grid-container')
const input = document.getElementById('search')
const con = document.querySelector('.card-container')
const nextBtn = document.querySelector('.next-Btn')
const prevBtn = document.querySelector('.prev-Btn')


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
    //map over the array of employees and place in gridContainer
    gridContainer.innerHTML = employees.map((employee, index) => {
      //destructure properties in array
      const {name, email, location, picture} = employee;
      return `<div class="card" index=${index}>
          <div class="card-container">
          <img class="${name.first} profile" src=${picture.large} />
          <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="city">${location.city}</p>
          </div>
         </div>
        </div>`
    })
    .join('')
  }

//Modal 
  const displayModal = (index) => {
      const { picture, name, email, dob, location = { city, street, state, postcode }, phone } = employees[index]

    let modalHTML = '';
    modalHTML += `
      <div class="container">
        <img src=${picture.large} alt="${name.first}">
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
    modal.innerHTML = modalHTML; 

    nextBtn.addEventListener('click', () => handleNextBtn(index));
    prevBtn.addEventListener('click', () => handlePrevBtn(index))
}
//Modal Buttons


const handleNextBtn = (currentIndex) => {
    let newIndex = currentIndex + 1;
    return displayModal(newIndex)
}

const handlePrevBtn = (currentIndex) => {
  let newIndex = currentIndex - 1;
  return displayModal(newIndex)
}

gridContainer.addEventListener('click', e => {
  if (e.target !== gridContainer) {
    const card = e.target.closest(".card");
    const string = card.getAttribute("index")
    const index = parseInt(string)
    displayModal(index); 
  }

modalBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
    let container = document.querySelector('.container')
    container.remove()   
  });
})



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

   
 


