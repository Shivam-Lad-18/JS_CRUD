function listProducts() {
    let list = document.getElementById("list");
    const sortRadios = document.querySelectorAll('input[name="options"]');
    const searchBox = document.getElementById("searchBox");

    // Clear the list before rendering
    list.innerHTML = '';

    // Check if localStorage is empty
    if (localStorage.length === 0) {
        let newItem = document.createElement('div');
        newItem.innerHTML = `
        <div class="d-flex flex-column mt-4 justify-content-center align-items-center">
        <img src="images/Noprod.jpg" class="w-25" alt="No product found!"/>
        <h4 class="mt-3">No product found!</h4>
    </div>
        `;
        list.appendChild(newItem);
    } else {
        // Retrieve all products from localStorage
        let products = [];
        for (let i = 0; i < localStorage.length; i++) {
            let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            products.push(item);
        }

        // Determine the selected sorting option
        let selectedSort = 'name'; // Default sort by name
        sortRadios.forEach(radio => {
            if (radio.checked) {
                selectedSort = radio.id;
            }
        });

        // Sort the products based on the selected option
        if (selectedSort === 'name') {
            products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === 'prod_id') {
            // Sort by the product ID as a string (lexicographical order)
            products.sort((a, b) => a.id.localeCompare(b.id));
        } else if (selectedSort === 'price') {
            products.sort((a, b) => a.price - b.price);
        }

        // Filter products based on the search term
        const searchTerm = searchBox.value.trim().toLowerCase();
        if (searchTerm) {
            products = products.filter(item => item.id.toLowerCase().includes(searchTerm));
        }

        // Render the sorted and filtered products
        if (products.length === 0) {
            let newItem = document.createElement('div');

            newItem.innerHTML = `
            <div class="d-flex flex-column mt-5 justify-content-center align-items-center">
        <img src="images/Noprod.jpg" class="w-25" alt="No product found!"/>
        <h4 class="mt-3">No product found!</h4>
    </div>
            `;
            list.appendChild(newItem);
        } else {
            products.forEach(item => {
                let newItem = document.createElement('div');
                newItem.innerHTML = `
                    <div class="card shadow items" style="width: 15rem;">
                        <img src="${item.image}" class="card-img-top" alt="...">
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h5 class="mb-0 item_name">${item.name}</h5>
                                </li>
                                <li class="list-group-item">₹ ${item.price}</li>
                                <li class="list-group-item prod_id">Id : ${item.id}</li>
                            </ul>
                            <div class="d-flex justify-content-evenly my-2">
                                <a href="viewproduct.html?id=${item.id}" class="btn btn-outline-primary">View</a>
                                <a href="updateproduct.html?id=${item.id}" class="btn btn-outline-primary">Edit</a>
                                <button onclick="deleteProduct('${item.id}')" href="#" class="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>
                    </div>`;
                list.appendChild(newItem);
            });
        }
    }
}

// Add event listeners to radio buttons for sorting
document.addEventListener('DOMContentLoaded', function () {
    const sortRadios = document.querySelectorAll('input[name="options"]');
    sortRadios.forEach(radio => {
        radio.addEventListener('change', listProducts);
    });

    // Add event listener to search box for filtering
    const searchBox = document.getElementById("searchBox");
    searchBox.addEventListener('input', listProducts);

    // Initial render
    listProducts();
});

function deleteProduct(productId) {
    if (confirm('Delete this product !!')) {
        console.log(productId);
        localStorage.removeItem(`${productId}`);
        listProducts();
    }
}
