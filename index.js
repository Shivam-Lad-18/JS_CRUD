function listProducts(){
    let list = document.getElementById("list");
    list.innerHTML='';
    if(localStorage.length==0){
        let newItem = document.createElement('div');
    }
    else{
        for(let i=0;i< localStorage.length ; i++){
            let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            // console.log();
            console.log(item);
            let newItem = document.createElement('div');
            newItem.innerHTML=`
             <div class="card shadow" style="width: 15rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body p-0">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h5 class="mb-0">${item.name}</h5>
                            </li>
                            <li class="list-group-item">₹${item.price}</li>
                           
                        </ul>
    
                        <div class="d-flex justify-content-evenly my-2">
                            <a href="viewproduct.html?id=${item.id}" class="btn btn-outline-primary">View</a>
                            <a href="updateproduct.html?id=${item.id}" class="btn btn-outline-primary">Edit</a>
                            <button onclick="deleteProduct('${item.id}')" href="#" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>`;
            list.appendChild(newItem);
        }
    }
}
function deleteProduct(productId){
    if(confirm('Delete this product !!')){
        console.log(productId);
        localStorage.removeItem(`${productId}`);
        listProducts();
    }
}
document.addEventListener('DOMContentLoaded', listProducts);
