document.addEventListener('DOMContentLoaded', update);

function update(){

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    let prod = JSON.parse(localStorage.getItem(productId));
    console.log(prod);
    
    let Name = document.getElementById("P_name").value = prod.name;
    let Price = document.getElementById("P_price").value= prod.price;
    let Desc = document.getElementById("P_desc").value = prod.description;
    let Img = document.getElementById("P_img").value = prod.image;

    let previmg = document.getElementById("prev_img");
    previmg.src = prod.image;
}
function updateimg(){
    let previmg = document.getElementById("prev_img");
    previmg.src = document.getElementById("P_img").value;
}
function updateProd(){

    let Name = document.getElementById("P_name").value.trim();
    let Price = document.getElementById("P_price").value.trim();
    let Desc = document.getElementById("P_desc").value.trim();
    let Img = document.getElementById("P_img").value.trim();

    const imageLinkRegex = /^(https?:\/\/.*\.(?:png|jpe?g|gif|webp|bmp|svg))(?:[\?#].*)?$/i;

    if (!imageLinkRegex.test(Img)) {
        alert('Please enter a valid image link (e.g., https://example.com/image.png).');
        return; 
    }
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    let product = {
        id:productId,
        name: Name,
        price: Price,
        description: Desc,
        image: Img
    };
    let productJSON = JSON.stringify(product);
    localStorage.setItem(productId, productJSON);
    showSuccessAlert();
    document.getElementById("P_name").value='';
    document.getElementById("P_price").value='';
    document.getElementById("P_desc").value='';
    document.getElementById("P_img").value='';
}
function showSuccessAlert() {
    // Get the alert element
    let alertElement = document.getElementById('success-alert');

    // Show the alert by removing the 'd-none' class
    alertElement.classList.remove('d-none');

    // Hide the alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.add('d-none');
    }, 1000); // 5000 milliseconds = 5 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
    // Add event listener to the close button
    let closeButton = alertElement.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        alertElement.classList.add('d-none');
    });
}
