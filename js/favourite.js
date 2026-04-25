let savedProducts = [];

window.onload = function () {
    loadSavedProducts();
};

async function loadSavedProducts() {
    // Get saved product IDs from localStorage
    savedProducts = JSON.parse(localStorage.getItem("savedProducts")) || [];

    if (savedProducts.length === 0) {
        displayEmptyMessage();
        return;
    }

    const container = document.getElementById('favourite-container');
    container.innerHTML = ''; // Clear existing content

    // Fetch all saved products
    for (const productId of savedProducts) {
        try {
            // Fetch product details
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            if (!response.ok) throw new Error('Product not found');
            const product = await response.json();

            const productCard = `
                <div class="favourite-card" data-product-id="${product.id}">
                    <div class="img-wrapper">
                        <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2214%22 font-family=%22Arial%22%3ENo Image%3C/text%3E%3C/svg%3E'">
                        <div class="save-btn-favourite">
                            <i class="material-symbols-outlined remove-favourite" title="Remove from favourite">bookmark_added</i>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p class="category">category - ${product.category}</p>
                        <p class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</p>
                        <p class="price">$${product.price} -/</p>
                        <p class="discount">${product.discountPercentage}% off</p>
                    </div>
                    <div class="btn-box">
                        <a href="" class="btn">shop now</a>
                        <a href="" class="btn">add to cart</a>
                    </div>
                </div>
            `;

            container.innerHTML += productCard;
        } catch (err) {
            console.error('Failed to fetch product:', productId, err);
        }
    }

    // Add event listener for remove buttons
    attachRemoveListeners();
}

function attachRemoveListeners() {
    const removeBtns = document.querySelectorAll('.remove-favourite');
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.favourite-card');
            const productId = parseInt(card.getAttribute('data-product-id'));
            
            // Remove from savedProducts array
            savedProducts = savedProducts.filter(id => id !== productId);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            
            // Remove card from DOM with animation
            card.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                card.remove();
                
                // Check if no products left
                if (document.querySelectorAll('.favourite-card').length === 0) {
                    displayEmptyMessage();
                }
            }, 300);
        });
    });
}

function displayEmptyMessage() {
    const container = document.getElementById('favourite-container');
    container.innerHTML = `
        <div class="empty-message">
            <i class="material-symbols-outlined">favorite_border</i>
            <h3>No Favourite Products Yet</h3>
            <p>Start adding your favourite products!</p>
            <a href="index.html#sec-product" class="btn">shop now</a>
        </div>
    `;
}
