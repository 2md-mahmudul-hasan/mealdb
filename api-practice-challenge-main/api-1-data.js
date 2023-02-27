const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };


  const myData = person.result;
  console.log(myData)


myData.map(user=>{
  const cardContainer = document.getElementById('card-container');
  const div = document.createElement('div')
  div.classList.add('col-md-6');
  div.innerHTML = `  
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Person Name : ${user.name.common}</h5>
      <h3 class="card-text">Age ${user.age}</h3>
      <p> street  = ${user.address.street}</p>
    </div>
  </div>
  `
cardContainer.appendChild(div)

})



const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
    
  },
];


const myData2 = data.slice(0, 2);
console.log(myData)


myData2.forEach(car=>{
const cardContainer = document.getElementById('card-container2');
const div = document.createElement('div')
div.classList.add('col-md-6');
div.innerHTML = `  
<div class="card">
  <div class="card-body">
    <img class="w-100" src=${car.imageURL}/>
    <h5 class="card-title">Car Name : ${car.name}</h5>
    <h3 class="card-text">Age </h3>
    <p> street  = ${car.description}</p>
    <a href="#" class="btn btn-primary"> car price: ${car.price}</a>
  </div>
</div>
`
cardContainer.appendChild(div)

})



//rest countries 


const loadCountries =()=>{
  const regionName = document.getElementById('region-name').value;
  const url = `https://restcountries.com/v3.1/region/${regionName}`
  console.log(url)
  fetch(url)
  .then(res=>res.json())
  .then(data=>countryName(data))
}

const countryName=(countries)=>{
  const cardContainer = document.getElementById('card-container4');
  countries.map(country=>{
    console.log(country)
    cardContainer.innerHTML = 
`<h2> ${country.name.common}</h2>`
  })
}

loadCountries()