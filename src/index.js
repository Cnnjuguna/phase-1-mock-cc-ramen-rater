// write your code here
document.addEventListener('DOMContentLoaded', async (e)=>{

  const ramenMenu = document.querySelector("#ramen-menu"); 
  const ramenDetail = document.querySelector("#ramen-detail"); 
  const ramenName = document.querySelector("h2");
  const ramenRestaurant = document.querySelector(".restaurant");
  const ramenRatings = document.querySelector("#rating-display");
  const ramenComment = document.getElementById("comment-display");
  let previousImage = null;


  async function renderRamenData(){

    const response = await fetch("http://localhost:3000/ramens");

    const data = await response.json();

    console.log(data);
  



    // data.ramens.forEach(ramen => {

    //   const img = document.createElement('img');
    //   img.src = ramen.image;
    //   img.alt = ramen.name;
    //   ramenMenu.appendChild(img);   

    // });


      data.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
       
        ramenMenu.appendChild(img);  

// Update the textContent of the Ramen Details.        
        img.addEventListener('click', (data) => {

            if (previousImage != null){
              previousImage.style.display = 'block';
            }

// Clonig a copy of th clicked image 
            const imgCopy = img.cloneNode(true);
// Sets the <div id="ramen-details"> to an empty string
            ramenDetail.innerHTML = '';
            ramenDetail.appendChild(imgCopy);
// Ramen bio updating as images are clicked on
            ramenName.textContent = ramen.name;
            ramenRestaurant.textContent = ramen.restaurant;
            ramenRatings.textContent = ramen.rating;
            ramenComment.textContent = ramen.comment;

            const detailImage = ramenDetail.querySelector('.detail-image');
            detailImage.src = ramen.image;
            detailImage.alt = ramen.name;

// Assigning the value of the previous image to the clicked image Copy
            previousImage = imgCopy;
         
            img.style.display = 'none';



          });




      });




  }

  await renderRamenData();

    async function createNewRamen(e){
    e.preventDefault();




    const newRestaurant = document.getElementById("new-restaurant" );
    const newRamenName = document.getElementById("new-name");
    const newRamenRating = document.getElementById("new-rating");
    const newRamenComment = document.getElementById("new-comment");
    const newRamenImage = document.getElementById("new-image");
    const createARamenBtn = document.getElementById("createARamen");
    const newRamenForm = document.getElementById('new-char');



    const formData = new FormData(newCharForm);
    const data = Object.fromEntries(formData.entries());


    const newRamen = {
      name: newRamenName.value,
      restaurant: newRestaurant.value,
      rating: newRamenRating.value,
      comment: newRamenComment.value,
      image: newRamenImage.value,

    }

    await fetch("http://localhost:3000/ramens", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRamen)
  });
    // Clear the form inputs
    newRamenForm.reset();

  // Refresh 
    ramenMenu.innerHTML = "";

    await renderRamenData();

    const ramenForm = document.getElementById('new-ramen');
    ramenForm.addEventListener('submit', (e) => {
      e.preventDefault();



    })
  }

});
    // const imageValid = new Image();
    // imageValid.src = newCharImageURL;

    // imageValid.addEventListener("load", async () => {

    // })








// fetch("http://localhost:3000/ramens")


// async function getRamenInfo({
    
// })





// Window.addEventListener('DOMContentLoaded', () => renderPosts());



// All ramen images in the div with the id of ramen-menu.
// Display the image for each of the ramen using an img tag
// inside the #ramen-menu div.

