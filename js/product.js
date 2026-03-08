const cardContainer = document.querySelectorAll('.product-wrapper');

window.onload = function () {
    fetchProducts();
};

const fetchProducts = async () => {

    cardContainer.forEach(async (box) => {
        
        let url = `https://dummyjson.com/products/category/${box.getAttribute('id')}`

        const response = await fetch(url);
        const data = await response.json();
        
        const info = data.products

        console.log(info);
        
        showingDetail(info)
    });

}

const showingDetail = (info) => {

    info.forEach(data => {
        let productCard = `
        <div class="product-card">
            <div class="saveBtn"><i class="material-symbols-outlined" id="save-icon">bookmark</i></div>
            <img src="${data.thumbnail}" alt="">
            <h3>${data.title}</h3>
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

        cardContainer.forEach(cards => {
            
            cards.innerHTML += productCard

        });
    });

}
