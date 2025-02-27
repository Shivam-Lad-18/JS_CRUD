// Images link for adding product 
// https://images.pexels.com/photos/18311093/pexels-photo-18311093/free-photo-of-orange-keybord-renderd-by-blender-3d.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/301367/pexels-photo-301367.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/6716442/pexels-photo-6716442.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/6634646/pexels-photo-6634646.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&w=600


function addProduct(event){
    event.preventDefault();
    // Selecting elements
    let Name = document.getElementById("P_name").value.trim();
    let Price = document.getElementById("P_price").value.trim();
    let Desc = document.getElementById("P_desc").value.trim();
    let Img = document.getElementById("P_img").value.trim();

    // RegEx for image link
    // const imageLinkRegex = /^(https?:\/\/.*\.(?:png|jpe?g|gif|webp|bmp|svg))(?:[\?#].*)?$/i;
    // if (!imageLinkRegex.test(Img)) {
    //     alert('Please enter a valid image link (e.g., https://example.com/image.png).');
    //     return; 
    // }

    // creating object of product and push to local storage
    let productId =  btoa(Date.now().toString());
    let product = {
        id:productId,
        name: Name,
        price: Price,
        description: Desc,
        image: Img
    };
    let productJSON = JSON.stringify(product);
    localStorage.setItem(productId, productJSON);

    // Alert message function call
    showSuccessAlert();

    // Clearing the feilds in form
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


