const modalBtn = document.querySelector('.modal-close')
const overlay = document.querySelector('.overlay')
const APIUrl = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector('.grid-container')
let employees = []


function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .then(data => displayEmployees(data))
    .catch(err => console.log(err))
}

fetchData(APIUrl)
  
  
  const displayEmployees = data => {
    employees = data;
    let employeeHTML = ''
    employees.forEach((employee, index) => {
      let name = employee.name;
      let email = employee.email;
      let city = employee.location.city;
      let picture = employee.picture;

    employeeHTML += `
       <div class="card">
          <img class="${name.first} profile" src=${picture.large} />
          <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
         </div>
        </div>`

      gridContainer.innerHTML = employeeHTML
      })   
  }


  function fetchModalImage() {
    const img = card.querySelector('img')
    const p = card.querySelector('p')

    // //returns a promise that will be resolved/fulfilled once data is retrived from server and parsed
    // fetchData(`https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`)
    //   .then(data => {
    //     img.src = data.
    //   })
  }

modalBtn.addEventListener('click', () => {
  overlay.classList.add('hidden')
})
      //  <div class="card">
      //     <img class="avatar" src="member-1.jpg" />
      //     <div class="text-container">
      //       <h2 class="name">Haleigh Macchiarella</h2>
      //       <p class="email">dtucker@yakitri.edu</p>
      //       <p class="address">Chicago</p>
      //    </div>
      //   </div>
