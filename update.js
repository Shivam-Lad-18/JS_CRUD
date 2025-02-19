// Listen for the DOM to be fully loaded before running the update function
document.addEventListener('DOMContentLoaded', update);

function update() {
    // Get the query parameters from the URL (e.g., ?id=123)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Get the 'id' of the product from the URL

    // Retrieve the product data from localStorage using the productId
    let prod = JSON.parse(localStorage.getItem(productId));
    console.log(prod); // Log the product to the console for debugging
    
    // Populate the input fields with the product's data
    let Name = document.getElementById("P_name").value = prod.name;
    let Price = document.getElementById("P_price").value = prod.price;
    let Desc = document.getElementById("P_desc").value = prod.description;
    let Img = document.getElementById("P_img").value = prod.image;

    // Set the preview image based on the product's image URL
    let previmg = document.getElementById("prev_img");
    previmg.src = prod.image;
}

// Function to update the image preview when the user changes the image URL
function updateimg() {
    let previmg = document.getElementById("prev_img");
    // Update the image preview with the new URL entered by the user
    previmg.src = document.getElementById("P_img").value;
}

// Function to update the product data when the user clicks the 'Update' button
function updateProd() {
    // Get the input values from the form and trim any extra spaces
    let Name = document.getElementById("P_name").value.trim();
    let Price = document.getElementById("P_price").value.trim();
    let Desc = document.getElementById("P_desc").value.trim();
    let Img = document.getElementById("P_img").value.trim();

    // Regular expression to check if the image URL is valid
    // const imageLinkRegex = /^(https?:\/\/.*\.(?:png|jpe?g|gif|webp|bmp|svg))(?:[\?#].*)?$/i;

    // If the image URL is not valid, show an alert and exit the function
    // if (!imageLinkRegex.test(Img)) {
    //     alert('Please enter a valid image link (e.g., https://example.com/image.png).');
    //     return;
    // }

    // Get the productId from the URL to update the correct product
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Create a new product object with the updated information
    let product = {
        id: productId,
        name: Name,
        price: Price,
        description: Desc,
        image: Img
    };
    
    // Convert the product object into a JSON string and save it in localStorage
    let productJSON = JSON.stringify(product);
    localStorage.setItem(productId, productJSON);
    
    // Show a success alert to the user
    showSuccessAlert();
    
    // Clear the form inputs after the update
    document.getElementById("P_name").value = '';
    document.getElementById("P_price").value = '';
    document.getElementById("P_desc").value = '';
    document.getElementById("P_img").value = '';
}

function showSuccessAlert() {
    // Get the alert element
    let alertElement = document.getElementById('success-alert');

    // Show the alert by removing the 'd-none' class
    alertElement.classList.remove('d-none');

    // Hide the alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.add('d-none');
    }, 700); // 5000 milliseconds = 5 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 700);
    // Add event listener to the close button
    let closeButton = alertElement.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        alertElement.classList.add('d-none');
    });
}
