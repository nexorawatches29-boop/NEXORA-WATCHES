const phone="923452745122";

const products=[
  {name:"NEXORA Classic Black",price:"PKR 3,500",old:"PKR 4,200",image:"images/watch1.jpg"},
  {name:"NEXORA Two Tone",price:"PKR 3,500",old:"PKR 4,200",image:"images/watch2.jpg"},
  {name:"NEXORA Date Style",price:"PKR 3,300",old:"PKR 3,900",image:"images/watch3.jpg"},
  {name:"NEXORA Signature",price:"PKR 3,500",old:"PKR 4,200",image:"images/watch4.jpg"}
];

const grid=document.getElementById("productGrid");
grid.innerHTML=products.map(p=>`
  <article class="card">
    <div class="card-img">
      <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=&quot;no-img&quot;>ADD PHOTO<br>TO IMAGES FOLDER</div>'">
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <div><span class="price">${p.price}</span> <span class="old">${p.old}</span></div>
      <a class="order" target="_blank" href="https://wa.me/${phone}?text=${encodeURIComponent("Assalam o Alaikum, I want to order: "+p.name+" - "+p.price)}>ORDER ON WHATSAPP</a>
    </div>
  </article>
`).join("");