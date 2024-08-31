// Built off pre-existing code
//can't run code normally on Google chrome have to use Live Server
console.log("Hello")

document.addEventListener('DOMContentLoaded', main)

const ramenMenu = document.getElementById('ramen-menu')
const detailImage = document.querySelector('.detail-image')
const name = document.querySelector('.name')
const restaurant= document.querySelector('.restaurant')
const rating = document.getElementById('rating-display')
const comment = document.getElementById('comment-display')


// requesting data from server and displaying ramen 
function displayRamens() {
  return fetch ('db.json')
  .then(function(response) {
    return response.json()
  })
  .then(data => {

        data.ramens.forEach((ramen, index) => {
        const img = document.createElement('img')
        img.src = ramen.image
        img.alt = ramen.name
        img.addEventListener('click', () => handleClick(ramen)) 
        ramenMenu.appendChild(img) 

        if(index === 0) {  
          handleClick(ramen) 
      }
      else{
            console.log("Raman display issue")
      }
    })
  })
}

// Linking HTML locational insert to ramen data to handleClick event 

  function handleClick(ramen) {
    detailImage.src = ramen.image
    name.textContent = ramen.name 
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating 
    comment.textContent = ramen.comment
  }

// Targeting & submitting form element values for new-ramen
  function submitListener() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      if (e.preventDefault()){
      console.log("Haven has sniffed this")
      }
      const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value, 
      }
      addImage(newRamen) 
    })
  }
  
// creation on new input 
    function addImage(newRamen) {
      const img = document.createElement('img')
        img.src = newImage.image 
        img.alt = newImage.name
        img.addEventListener('click', () => handleClick(newRamen))
        ramenMenu.appendChild(img)  
    };
  
    // Display of current raman and render of added
    function main() {
      displayRamens();
      submitListener();
    }
    
    export {
      main,
      displayRamens,
      handleClick,
      submitListener,
      addImage,
    }