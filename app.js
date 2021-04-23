const modalBtn = document.querySelector('.modal-close')
const overlay = document.querySelector('.overlay')
const APIUrl = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector('.grid-container')
// let employees = []


function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
}

fetchData(APIUrl)
  .then(data => displayData(data))
  
  
  const displayData = (data) => {
    const html = `
    <p>${data.results[1].email}</p>
    `
    gridContainer.innerHTML = html
    console.log(data)
  }


  function fetchModalImage() {
    const img = card.querySelector('img')
    const p = card.querySelector('p')

    fetchData(APIUrl)
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
