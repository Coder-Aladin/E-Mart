const cardWrappers = document.querySelectorAll('.product-wrapper');

let savedProducts = []; // array of product IDs that are saved

function initializeSaveCount() {
    savedProducts = JSON.parse(localStorage.getItem("savedProducts")) || [];
    displaySaveCount();
}

window.onload = function () {
  // initializeSaveCount will be called after navbar loads (component.js)
  fetchProducts();
};

async function fetchProducts() {
    
    for (const wrapper of cardWrappers) {

        const category = wrapper.getAttribute('id');

        const response = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(category)}`);
        const productInfo = await response.json();

        const cards = productInfo.products

            cards.forEach(card => {

          console.log(card);
          
          const isSaved = savedProducts.includes(card.id);
          const bookmarkIcon = isSaved ? 'bookmark_added' : 'bookmark';
          
          // Use fallback image if thumbnail is not available
          const imageUrl = card.thumbnail || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-size="14" font-family="Arial"%3ENo Image%3C/text%3E%3C/svg%3E';
        
            let productCard = `
              <div class="product-card swiper-slide" data-product-id="${card.id}">
                <div class="save-Btn"><i class="material-symbols-outlined saveBtn save-icon">${bookmarkIcon}</i></div>
                    <img src="${imageUrl}" alt="${card.title}" loading="lazy">
                    <div class="content">
                      <h3>${card.title}</h3>
                      <p class="cat">category - ${card.category}</p>
                      <p class="rat"><i class="fa-solid fa-star"></i> ${card.rating}</p>
                      <p class="discount">${card.discountPercentage}% off</p>
                      <p class="price">$${card.price} -/</p>
                    </div>  
                    <div class="btn-box">
                          <a href="" class="btn">shop now</a>
                          <a href="" class="btn">add to cart</a>
                      </div>
                </div>
            `

            wrapper.innerHTML += productCard;

        });


        wrapper.addEventListener('click', (e) => {

          const btn = e.target.closest(".save-Btn");

          if (btn) {

            const icon = btn.querySelector(".save-icon");
            const productCard = btn.closest(".product-card");
            const productId = parseInt(productCard.getAttribute("data-product-id"));

            if (icon.textContent === "bookmark") {
              icon.textContent = "bookmark_added";
              if (!savedProducts.includes(productId)) {
                savedProducts.push(productId);
              }
              localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
              displaySaveCount()
            } 
            else {
              icon.textContent = "bookmark";
              savedProducts = savedProducts.filter(id => id !== productId);
              localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
              displaySaveCount()
            }

          }

        });




    }

}


var swiper = new Swiper(".sec-product .box-container", {
  loop: false,
  spaceBetween: 20,
  centeredSlides: true,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});


function displaySaveCount() {
  
  const addBtn = document.getElementById('save-count');
  if (!addBtn) return; // element may not exist yet

  const count = savedProducts.length;
  if (count > 0) {
    addBtn.style.visibility = 'visible';
    addBtn.innerText = count;
  } else {
    addBtn.style.visibility = 'hidden';
    addBtn.innerText = '';
  }

}

document.addEventListener('click', (e) => {
  
})