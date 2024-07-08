document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const closeCartButton = document.getElementById('close-cart');
    const buyNowButton = document.getElementById('buy-now');
    const cartButton = document.getElementById('cart-button');
    const sortLowToHighButton = document.getElementById('sort-low-to-high');
    const sortHighToLowButton = document.getElementById('sort-high-to-low');
    const locationButton = document.getElementById('location-button');
    const locationDropdown = document.getElementById('location-dropdown');
    const countryList = document.getElementById('country-list');
    const selectedCountryDiv = document.getElementById('selected-country');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedCountryName = document.getElementById('selected-country-name');
    const cartCount = document.getElementById('cart-count');

    let cart = [];
    let products = [];

    // Fetch products from API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        });

    // Function to display products
    function displayProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');

            productCard.innerHTML = `
                <img class="h-40 w-full object-cover mb-4" src="${product.image}" alt="${product.title}">
                <h2 class="text-xl font-bold mb-2">${product.title}</h2>
                <p class="text-gray-700 mb-2">$${product.price}</p>
                <p class="text-gray-600 mb-4">${product.description.substring(0, 100)}...</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded buy-now" data-id="${product.id}">Buy Now</button>
            `;

            productsContainer.appendChild(productCard);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                addToCart(products.find(product => product.id == productId));
            });
        });

        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                buyNow(products.find(product => product.id == productId));
            });
        });
    }

    // Add to Cart function
    function addToCart(product) {
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.title} has been added to the cart.`);
    }

    // Buy Now function
    function buyNow(product) {
        cart.push(product);
        cartCount.textContent = cart.length;
        showCart();
    }

    // Show Cart function
    function showCart() {
        cartItemsContainer.innerHTML = '';

        cart.forEach(product => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('mb-2');
            cartItem.textContent = `${product.title} - $${product.price}`;
            cartItemsContainer.appendChild(cartItem);
        });

        cartModal.classList.remove('hidden');
    }

    // Close Cart function
    closeCartButton.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    // Buy Now button event
    buyNowButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        cartCount.textContent = cart.length;
        cartModal.classList.add('hidden');
    });

    // Cart button event
    cartButton.addEventListener('click', () => {
        showCart();
    });

    // Sort buttons event
    sortLowToHighButton.addEventListener('change', () => {
        if (sortLowToHighButton.checked) {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            displayProducts(sortedProducts);
        }
    });

    sortHighToLowButton.addEventListener('change', () => {
        if (sortHighToLowButton.checked) {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            displayProducts(sortedProducts);
        }
    });

    // Location button event to toggle dropdown
    locationButton.addEventListener('click', () => {
        locationDropdown.classList.toggle('hidden');
    });

    // Fetch country data from API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            displayCountries(data);
        });

    // Function to display countries in dropdown
    function displayCountries(countries) {
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Sort countries alphabetically

        countries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.classList.add('flex', 'items-center', 'mb-2', 'cursor-pointer', 'hover:bg-gray-200', 'p-2', 'rounded');

            listItem.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common} flag" class="w-6 h-4 mr-2">
                <span>${country.name.common}</span>
            `;

            listItem.addEventListener('click', () => {
                selectCountry(country);
                locationDropdown.classList.add('hidden');
            });

            countryList.appendChild(listItem);
        });
    }

    // Function to handle country selection
    function selectCountry(country) {
        selectedFlag.src = country.flags.png;
        selectedFlag.alt = `${country.name.common} flag`;
        selectedCountryName.textContent = country.name.common;
        selectedCountryDiv.classList.remove('hidden');
    }
});


