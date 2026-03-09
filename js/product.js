const cardWrappers = document.querySelectorAll('.product-wrapper');

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

            let productCard = `
                <div class="product-card swiper-slide">
                    <div class="saveBtn"><i class="material-symbols-outlined" id="save-icon">bookmark</i></div>
                    <img src="${card.thumbnail}" alt="">
                    <h3>${card.title}</h3>
                    <p>product description</p>
                    <p><i class="fa-solid fa-star"></i> 4.5</p>
                    <p>discounts</p>
                    <p>price</p>
                    <div class="btn-box">
                        <a href="" class="btn">shop now</a>
                        <a href="" class="btn">add to cart</a>
                    </div>
                </div>
            `

            wrapper.innerHTML += productCard;

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