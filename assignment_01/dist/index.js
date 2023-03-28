"use strict";
function getProducts() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json()).then((data) => {
        let products = [];
        products = data.products;
        // products = JSON.parse(data);
        // console.log(products);
        products.forEach((product) => {
            let mainBody = document.getElementById("productTable");
            let tr = document.createElement("tr");
            let tdId = document.createElement('td');
            let id = document.createTextNode(product.id.toString());
            tdId.appendChild(id);
            let tdProductTitle = document.createElement("td");
            let title = document.createTextNode(product.title);
            tdProductTitle.appendChild(title);
            let tdProductDesc = document.createElement("td");
            let desc = document.createTextNode(product.description);
            tdProductDesc.appendChild(desc);
            let tdBrand = document.createElement("td");
            let brand = document.createTextNode(product.brand);
            tdBrand.appendChild(brand);
            let tdCategory = document.createElement("td");
            let category = document.createTextNode(product.category);
            tdCategory.appendChild(category);
            tr.appendChild(tdId);
            tr.appendChild(tdProductTitle);
            tr.appendChild(tdProductDesc);
            tr.appendChild(tdBrand);
            tr.appendChild(tdCategory);
            mainBody.appendChild(tr);
        });
    });
}
getProducts();
//# sourceMappingURL=index.js.map