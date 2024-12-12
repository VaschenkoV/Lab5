// scripts.js  

function addToCart(productName, price) {  
    alert(productName + ' додано в кошик за ' + price + ' грн');  
}  

function filterProducts() {  
    const priceRange = document.getElementById('priceRange').value;  
    const priceValue = document.getElementById('priceValue');  
    priceValue.textContent = priceRange;  

    const products = document.querySelectorAll('.product');  
    products.forEach(product => {  
        const productPrice = product.dataset.price;  
        if (parseInt(productPrice) <= priceRange) {  
            product.style.display = 'block';  
        } else {  
            product.style.display = 'none';  
        }  
    });  
}  

function sortProducts() {  
    const sortBy = document.getElementById('sortSelect').value;  
    const products = Array.from(document.querySelectorAll('.product'));  

    if (sortBy === 'low') {  
        products.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));  
    } else if (sortBy === 'high') {  
        products.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));  
    } else {  
        // За популярністю - тут можна додати логіку для сортування за популярністю  
        return; // У даному випадку не змінюємо порядок.  
    }  

    const productList = document.getElementById('productList');  
    productList.innerHTML = ''; // Очистити список продуктів  
    products.forEach(product => productList.appendChild(product)); // Додати назад у відсортованому порядку  
}  

document.getElementById('feedbackForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Зупинити стандартну відправку форми  

    // Отримати значення з форми  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const message = document.getElementById('message').value;  

    // Показати повідомлення про успішну відправку  
    document.getElementById('formResponse').innerText = `Дякуємо, ${name}! Ваше повідомлення надіслане.`;  
    document.getElementById('feedbackForm').reset(); // Очистити форму  
});

   function updateProductDetails() {  
        const select = document.getElementById('product-select');  
        const selectedOption = select.options[select.selectedIndex];  
        const quantity = document.getElementById('product-quantity').value;  

        document.getElementById('product-name').innerText = selectedOption.value || 'Оберіть товар';  
        document.getElementById('product-price').innerText = (selectedOption.dataset.price * quantity) + " грн";  
    }  

    // Зміна ціни при зміні кількості  
    document.getElementById('product-quantity').addEventListener('input', updateProductDetails);  

    // Функція для обробки оплати  
    function submitPayment() {  
        const selectedProduct = document.getElementById('product-select').value;  
        const quantity = document.getElementById('product-quantity').value;  
        const customerName = document.getElementById('fullname').value;  

        if (selectedProduct && customerName) {  
            alert(`Дякуємо за покупку!\nТовар: ${selectedProduct}\nК-сть: ${quantity}\nЗагальна ціна: ${document.getElementById('product-price').innerText}`);  
        } else {  
            alert('Будь ласка, виберіть товар та введіть ПІБ!');  
        }  
    }  