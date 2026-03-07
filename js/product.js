window.onload = function () {
    fetchProducts();
};

const fetchProducts = async () => {
    const url = 'https://dummyjson.com/products'

    const response = await fetch(url);
    const data = await response.json();
    
    const info = data.products

    console.log(info);
    
    showingDetail(info)
}

const showingDetail = (info) => {

    const cardContainer = document.querySelector('.product-box')

    info.forEach(detail => {
        let card = `
            <div class="saveBtn"><i class="material-symbols-outlined" id="save-icon">bookmark</i></div>
            <img src="${detail.thumbnail}" alt="">
            <h3>${detail.title}</h3>
            <p>product description</p>
            <p><i class="fa-solid fa-star"></i> 4.5</p>
            <p>discounts</p>
            <p>price</p>
            <div class="btn-box">
                <a href="" class="btn">shop now</a>
                <a href="" class="btn">add to cart</a>
            </div>
        `

        cardContainer.innerHTML += card
    });

}