const loadPhones=async(phoneText)=>{
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneText}`

  const response = await fetch(url);
  const data = await response.json();
  phoneDetails(data.data)
}

const phoneDetails=(data)=>{

  const cardContaier = document.getElementById('card-container');
  cardContaier.innerHTML = '';

//show more
const showmore = document.getElementById('load-more')

if(data.length>10){
 data = data.slice(0, 10);
 showmore.classList.remove('d-none')
}else{
  showmore.classList.add('d-none')
}

// if no phone found
  const noPhone = document.getElementById('no-phone-message');
  if(data.length === 0){
    noPhone.classList.remove('d-none')
  }else{
    noPhone.classList.add('d-none')
  }
// end no phone message
  data.forEach(d=>{
    const div = document.createElement('div');
    div.classList.add('col-md-3');

    div.innerHTML = `
     <div class="card p-4 m-2 text-center">
      <div class="card-body">
        <h5 class="card-title">${d.brand}</h5>
        <img  src=${d.image} />
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      `
    cardContaier.appendChild(div)
  })
//stop loader 
toggleSpinner(false)
}

 document.getElementById('phone-btn').addEventListener('click', function(){
  //start toggle
  toggleSpinner(true)
  const phoneName = document.getElementById('phone-name');
  const phoneText = phoneName.value;
  console.log(phoneText)
  loadPhones(phoneText)
 })

const toggleSpinner = (isloading)=>{
  const spinnerArea  = document.getElementById('loader-spinner')
if(isloading){
spinnerArea.classList.remove('d-none');
}else{
  spinnerArea.classList.add('d-none');
}
}

// loadPhones('samsung')