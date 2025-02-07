// https://images.pexels.com/photos/18311093/pexels-photo-18311093/free-photo-of-orange-keybord-renderd-by-blender-3d.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/301367/pexels-photo-301367.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/6716442/pexels-photo-6716442.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/6634646/pexels-photo-6634646.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&w=600


function addProduct(){
    let Name = document.getElementById("P_name").value.trim();
    let Price = document.getElementById("P_price").value.trim();
    let Desc = document.getElementById("P_desc").value.trim();
    let Img = document.getElementById("P_img").value.trim();

    const imageLinkRegex = /^(https?:\/\/.*\.(?:png|jpe?g|gif|webp|bmp|svg))(?:[\?#].*)?$/i;

    if (!imageLinkRegex.test(Img)) {
        alert('Please enter a valid image link (e.g., https://example.com/image.png).');
        return; 
    }

    

    let productId = Date.now().toString();
    productId = Name +"_"+ productId;
    let product = {
        id:productId,
        name: Name,
        price: Price,
        description: Desc,
        image: Img
    };
    let productJSON = JSON.stringify(product);
    localStorage.setItem(productId, productJSON);
    console.log('Product data saved to local storage:', localStorage.getItem('productData'));

    // console.log(Name,Price,Desc,Img);
    showSuccessAlert();
}

function showSuccessAlert() {
    // Get the alert element
    let alertElement = document.getElementById('success-alert');

    // Show the alert by removing the 'd-none' class
    alertElement.classList.remove('d-none');

    // Hide the alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.add('d-none');
    }, 3000); // 5000 milliseconds = 5 seconds

    // Add event listener to the close button
    let closeButton = alertElement.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        alertElement.classList.add('d-none');
    });
}

