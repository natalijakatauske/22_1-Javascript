console.log('labas')

// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

// 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis
// (id, name, city, fav_color).
// 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę
// (lentelėje).
// 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// 4. Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones,
// kurie yra VIP.
// 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir
// mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba
// pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

const state = {}

const checkBoxRow = () => {
  const divas = document.createElement('div')
  const label = document.createElement('label')
  label.innerText = "VIP"
  const checkBox = document.createElement('INPUT')
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('id', 'isVip')
  
  document.body.appendChild(divas)
  divas.append(label, checkBox)
}
checkBoxRow()

const searchForm = () => {
  const form = document.createElement('form')
  const input = document.createElement('INPUT')
  input.setAttribute('type', 'search')
  input.setAttribute('id', 'search')
  input.setAttribute('placeholder', 'Enter name')
  const button = document.createElement('button')
  button.innerText = 'Search for name'
  button.setAttribute('id', 'searchButton')

  document.body.appendChild(form)
  form.append(input, button)
}
searchForm()

const tableFirstRow = () => {
    const table = document.createElement('table')
    table.style.borderCollapse = 'collapse'
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')

    const id = document.createElement('th')
    id.style.border = '1px solid black'
    id.innerText = 'ID'
    console.log('ID')

    const image = document.createElement('th')
    image.style.border = '1px solid black'
    image.innerText = 'Image'

    const firstName = document.createElement('th')
    firstName.style.border = '1px solid black'
    firstName.innerText = 'First name'

    const lastName = document.createElement('th')
    lastName.style.border = '1px solid black'
    lastName.innerText = 'Last name'

    const city = document.createElement('th')
    city.style.border = '1px solid black'
    city.innerText = 'City'

    const fav_color = document.createElement('th')
    fav_color.style.border = '1px solid black'
    fav_color.innerText = 'Fav_color'


    document.body.append(table)
    table.append(thead, document.createElement('tbody'))
    thead.appendChild(tr)
    tr.append(id, image, firstName, lastName, city, fav_color)
}
tableFirstRow()

function tableForUsers(robots) {
    const tbody = document.querySelector('tbody')
    tbody.innerText = ''
    console.log('tikrinu')

    robots.forEach(robot => {
        const tr = document.createElement('tr')

        const id = document.createElement('td')
        id.style.border = '1px solid black'
        id.innerText = robot.id
        console.log('vel tikrinu')

        const img = document.createElement('td')
        img.style.border = '1px solid black'
        const image = document.createElement('img')
        image.src = robot.image

        const [name, surname] = robot.name.split(' ')

        const firstName = document.createElement('td')
        firstName.style.border = '1px solid black'
        firstName.innerText = name

        const lastName = document.createElement('td')
        lastName.style.border = '1px solid black'
        lastName.innerText = surname

        const city = document.createElement('td')
        city.style.border = '1px solid black'
        city.innerText = robot.city

        const fav_color = document.createElement('td')
        fav_color.style.border = '1px solid black'
        fav_color.innerText = robot.fav_color

        tbody.append(tr)
        tr.append(id, img, firstName, lastName, city, fav_color)
        img.appendChild(image)
    })
}
// tableForUsers()

// document.getElementById('isVip').addEventListener('change', (event) => {
//   if (tableForUsers(robot.vip)) {
//     robots.filter(robot.vip)
//   } else {
//     tableForUsers(robots)
//   }
// })

async function fetchData() {
    try {
      let response = await fetch('https://magnetic-melon-yam.glitch.me');
      if (response.ok) {
        state.robots = await response.json();
        tableForUsers(state.robots);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  