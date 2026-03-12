const cardWrappers = document.querySelectorAll('.product-wrapper');

let saveCount = 0;

window.onload = function () {
    fetchProducts();
};

async function fetchProducts() {
    
    for (const wrapper of cardWrappers) {

        const category = wrapper.getAttribute('id');

        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const productInfo = await response.json();

        const cards = productInfo.products

        cards.forEach(card => {

          console.log(card);
        
            let productCard = `
                <div class="product-card swiper-slide">
                    <div class="save-Btn"><i class="material-symbols-outlined saveBtn" id="save-icon">bookmark</i></div>
                    <img src="${card.thumbnail}" alt="">
                    <div class="content">
                      <h3>${card.title}</h3>
                      <p class="cat">category - ${card.category}</p>
                      <p class="rat"><i class="fa-solid fa-star"></i> ${card.rating}</p>
                      <p class="discount">$${card.discountPercentage}% off</p>
                      <p class="price">price - $${card.price} -/</p>
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

            const icon = btn.querySelector("#save-icon");

            if (icon.textContent === "bookmark") {
              icon.textContent = "bookmark_added";
              saveCount++
              wishAdd(saveCount)
            } 
            else {
              icon.textContent = "bookmark";
              saveCount--
              wishRemove(saveCount)
            }

          }

        });




    }

}


var swiper = new Swiper(".sec-product .box-container", {
  loop: true,
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


function wishAdd(saveCount) {
  
  const addBtn = document.getElementById('save-count');

  if (saveCount > 0) {
    addBtn.style.visibility = 'visible';
    addBtn.innerText = saveCount;
  } else {
    addBtn.style.visibility = 'hidden';
  }

}

function wishRemove(saveCount) {
  
  const addBtn = document.getElementById('save-count');

  if (saveCount === 0) {
    addBtn.style.visibility = 'hidden';
  } else {
    addBtn.style.display = 'visible';
    addBtn.innerText = saveCount;
  }

}

document.addEventListener('click', (e) => {
  
})