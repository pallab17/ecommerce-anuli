const productsData = [
  {id:1,name:"Shoes",price:30,category:"shoes",image:"https://via.placeholder.com/300"},
  {id:2,name:"Jackets",price:25,category:"clothing",image:"https://via.placeholder.com/300"},
  {id:3,name:"Headphones",price:10,category:"electronics",image:"https://via.placeholder.com/300"},
  {id:4,name:"Plants",price:13,category:"plants",image:"https://via.placeholder.com/300"},
  {id:5,name:"Books",price:3,category:"books",image:"https://via.placeholder.com/300"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let params = new URLSearchParams(window.location.search);
let category = params.get("category");

document.getElementById("title").innerText =
  "More products in " + category;

const box = document.getElementById("products");

productsData.forEach(p=>{
  if(p.category===category){
    box.innerHTML+=`
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>£${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  }
});

function addToCart(id){
  const item = productsData.find(p=>p.id===id);
  const existing = cart.find(p=>p.id===id);

  if(existing){
    existing.qty++;
  }else{
    cart.push({...item,qty:1});
  }

  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to Cart");
}
