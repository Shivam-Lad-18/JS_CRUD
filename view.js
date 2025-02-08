document.addEventListener('DOMContentLoaded', listProduct);

function listProduct(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    let prod = JSON.parse(localStorage.getItem(productId));
    console.log(prod);
    let newele = document.createElement("div");
    newele.innerHTML=`
     <div class="card rounded-2">
            <div class="d-flex flex-md-nowrap flex-wrap ">
                <div class=" img-cont d-flex justify-content-center  w-md-100">
                    <img src="${prod.image}" alt="prod" width="300px">
                </div>
                <div class="detail-cont">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h5 class="mb-0">${prod.name}</h5>
                        </li>
                        <li class="list-group-item">₹ ${prod.price}</li>
                        <li class="list-group-item">${prod.id}</li>
                        <li class="list-group-item">${prod.description}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
    document.getElementById("cont").appendChild(newele);
}
