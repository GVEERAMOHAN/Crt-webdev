const menu=document.getElementById("menu-icon");
const nav=document.querySelector(".navbar");

menu.onclick=()=>{
    nav.classList.toggle("show");
};

let sales=0;
let expenses=0;
let customers=[];
let inventory=[];

const update=()=>{
    document.getElementById("salesTotal").textContent=sales;
    document.getElementById("expenseTotal").textContent=expenses;
    document.getElementById("profitTotal").textContent=sales-expenses;
    document.getElementById("lowStock").textContent=inventory.filter(x=>x.stock<5).length;
};

document.getElementById("customerForm").onsubmit=e=>{
    e.preventDefault();
    const n=customerName.value;
    const p=customerPhone.value;
    const d=customerDue.value;
    customers.push({n,p,d});
    customerList.innerHTML="";
    customers.forEach((x,i)=>{
        customerList.innerHTML+=`<div class="item"><div><h3>${x.n}</h3><p>${x.p} | Pending: ₹${x.d}</p></div><button onclick="customers.splice(${i},1);this.parentElement.remove()">Delete</button></div>`;
    });
    e.target.reset();
};

document.getElementById("salesForm").onsubmit=e=>{
    e.preventDefault();
    sales+=Number(saleAmount.value);
    update();
    e.target.reset();
    alert("Sale added successfully");
};

document.getElementById("expenseForm").onsubmit=e=>{
    e.preventDefault();
    expenses+=Number(expenseAmount.value);
    update();
    e.target.reset();
    alert("Expense added successfully");
};

document.getElementById("inventoryForm").onsubmit=e=>{
    e.preventDefault();
    inventory.push({
        name:productName.value,
        stock:Number(productStock.value)
    });
    inventoryList.innerHTML="";
    inventory.forEach((x,i)=>{
        inventoryList.innerHTML+=`<div class="item"><div><h3>${x.name}</h3><p class="${x.stock<5?"low":""}">Stock: ${x.stock}${x.stock<5?" - Low Stock":""}</p></div><button onclick="inventory.splice(${i},1);this.parentElement.remove();update()">Delete</button></div>`;
    });
    update();
    e.target.reset();
};

document.getElementById("taskForm").onsubmit=e=>{
    e.preventDefault();
    const n=taskName.value;
    const d=taskDate.value;
    taskList.innerHTML+=`<div class="item"><div><h3>${n}</h3><p>Due: ${d}</p></div><button onclick="this.parentElement.remove()">Done</button></div>`;
    e.target.reset();
};