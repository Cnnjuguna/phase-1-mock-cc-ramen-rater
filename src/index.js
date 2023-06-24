// write your code here
document.addEventListener('DOMContentLoaded', async (e)=>{

  const ramenMenu = document.querySelector("#ramen-menu"); 
  const ramenDetail = document.querySelector("#ramen-detail"); 
  const ramenName = document.querySelector(".name");
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

})



// fetch("http://localhost:3000/ramens")


// async function getRamenInfo({
    
// })





// Window.addEventListener('DOMContentLoaded', () => renderPosts());



// All ramen images in the div with the id of ramen-menu.
// Display the image for each of the ramen using an img tag
// inside the #ramen-menu div.

