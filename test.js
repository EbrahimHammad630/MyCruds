// // start summary


// let text_1 = "java-script";
// let text_2 = "Html & Css";
// console.log(`I love ${text_1} And ${text_2}`);
// console.log("I love " + text_1 + " And " + text_2 );
// let x = "10";
// let y = 20;
// console.log( x + y );
// console.log( x - y );
// console.log( x * y );
// console.log( x / y );
// console.log( x ** y );
// console.log( +x + y);
// console.log(Math.round(100.65));
// console.log(Math.round(100.64));
// console.log(Math.ceil(100.64));
// console.log(Math.floor(100.64));
// console.log(Math.pow(5, 3));
// console.log(Math.min(5, 3, 2, 1));
// console.log(Math.max(5, 3, 2, 1));
// console.log(100.50.toString());
// console.log(100.5987.toFixed(3));
// console.log(100.5987.toExponential());
// console.log(100.5987.valueOf());
// console.log(Math.PI);
// console.log(Math.trunc(100.98855));
// console.log(parseInt(100.98855));
// console.log(parseFloat(100.98855));
// console.log(("Ebrahim").slice(1,3))
// console.log(Number.isInteger("10Ebraim"));
// // end summary

// // start transfer string to num

// let con = "I love Java-Script";
// let num = "20";
// let num_1 = "40";
// let num_2 = "30";
// let num_3 = "50Ebrahim30";

// console.log(num_1 + num_2);
// console.log(num_1 + num_2);
// console.log(num_2 - num_1);
// console.log(+num);
// console.log(+num_3);

// console.log(parseInt(num));
// console.log(parseInt(num_3));

// console.log(Math.trunc(num));
// console.log(Math.trunc(num_3));

// console.log(Math.round(num));
// console.log(Math.round(num_3));

// console.log(Math.ceil(num));
// console.log(Math.ceil(num_3));

// console.log(Math.floor(num));
// console.log(Math.floor(num_3));

// console.log(Number(num));
// console.log(Number(num_3));

// // end

// // string
// // transfer num to String
// console.log(1000.9998.toFixed(2));
// console.log(150..toString());
// console.log(150..toPrecision(2));
// console.log(String(100));
// // end

// // search in string

// let answer = "I Love Java-script";

// console.log(answer[2]);
// console.log(answer.charAt(2));

// console.log(answer.repeat(2));
// console.log(answer.length);

// console.log(answer.indexOf("a", 9));
// console.log(answer.lastIndexOf("a"));
// console.log(answer.includes("a"));
// console.log(answer.startsWith("a"));
// console.log(answer.endsWith("a"));

// console.log(answer.split(""));
// console.log(answer.slice(3,));
// console.log(answer.substring(3));
// console.log(answer.substr(3,5));

// // end in string

// let array = ["Ebrahim", "Hammad" , "I Love", "Java"];
// array.push("Abdo", "Saleh"); //from-end
// array.unshift("sameh", "ahmed"); //from-start
// array.shift("sameh","ahmed"); //from-start
// array.pop("Abdo" ,"Saleh"); //from-end
// console.log(array);
// console.log(array.length);
// console.log(array[2]);
// console.log(array.indexOf("Hammad",0));
// console.log(array.lastIndexOf("Hammad", -3));
// console.log(array.includes("Hammad"));

// let object = [1, 2, 3,[4, 5, 6], 5];
// console.log(object[3][0]);

// let x = prompt("Your percentage :");

// if ( 100>= x && x >= 90)
// {
//     document.write("Excellent");
// }
// else if (x > 100 && x < 0)
// {
//     document.write("Error");
// }
// else if ( 90 > x && x >=80 )
// {
//     document.write("Very Good");
// }
// else if ( 80 > x  && x>=70 )
// {
//     document.write("Good");
// }
// else if ( 70 > x && x >=50 )
// {
//     document.write("Pass");
// }
// else
// {
// document.write("Fail");
// }

// let n = 4 ;
// for ( let i = n ; i <= n ; i--)
// {
//     let z = "*".repeat(i);
//     console.log( a + z )
// }

// let age = prompt("what is your age ?");
// age > 18 ?
//     console.log("Hello, user")
//     :age == 18?
//         console.log("You are 18")
//         : console.log("You are very young");

// let role = prompt("What is your role ?");
// switch (role)

// case "admin" :
//     console.log("Create, Update, Delete");
//     break;
// case "moderator" :
//     console.log("Create , Update");
//     break;
//     case "editor" :
//         console.log("Update");
//         break;
//     default :
//     console.log("hello , user");

//     let names = ["Ahmed", "Ebrahim", "Ayman", "Medo", "Engy", "Osama" ]
// for ( let i = names.length ; i > 0 ; i-- )
// {
//     console.log(names[i-1]);
// }

// let x = "ahmed" ;
// for ( j = x.length  ; j > 0 ; j--)
// {
//     console.log(x[j - 1]);
// }

// let cars = ["BMW", "Merceds", "Honda"];
// let models = [2020, 2021, 2022];
// let color = ["red", "green", "black"];

// for (j = 0; j < cars.length; j++) {
//   console.log("Cars: " + cars[j]);
//   for (i = 0; i < models.length; i++) {
//     console.log("Model: " + models[i]);
//   }
//   for (z = 0; z < color.length; z++) {
//     console.log("color: " + color[z]);
//   }
//   console.log("_____________________");
// }

// let users = ["ali", "mazen", "gamal", "oday", 1, 2, 3, 6, "yousef", "ahmed"];

// for (let i = 0; i < users.length; i++) {
//   if (typeof users[i] == "number") {
//     continue;
//   } else {
//     console.log(users[i]);
//   }
// }
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
//   if (users[i] == "yousef") {
//     break;
//   }
// }

// let i = 0;
// while (i < 3) {
//   console.log("<h1>Hello</h1>");
//   i++;
// }

// let i = 0;
// do {
//   console.log("Hello, World");
//   i++;
// } while (i < 3);

// function days(age) {
//   let result = age * 365;
//   return result;
// }
// let x = days(prompt("What is your age ? "));

// function calcAgeByHours(age) {
//   let result = age * 24;
//   return result;
// }
// let y = calcAgeByHours(x);

// console.log(x + " day");
// console.log(y + " hour");


// let c = prompt("What is the first numbre ?");
// let d = prompt("What is the oprtaion ?");
// let e = prompt("What is the second numbre ?");

// function add(x, y)
// {
//     let result = +x + +y;
//     return result;
// }
// function div(x, y)
// {
//     let result = x / y;
//     return result;
// }
// function cros(x, y)
// {
//     let result = x * y;
//     return result;
// }
// function sub(x, y)
// {
//     let result = x - y;
//     return result;
// }
// function pow(x, y)
// {
//     let result = x ** y;
//     return result;
// }

// if (d == "+") 
// {
//     console.log(add(c, e));
// }
// if (d == "-") 
// {
//     console.log(sub(c, e));
// }
// if (d == "*") 
// {
//     console.log(cros(c, e));
// }
// if (d == "/") 
// {
//     console.log(div(c, e));
// }
// if (d == "**") 
// {
//     console.log(pow(c, e));
// }

// function add( ...num  ) 
// {
//     let result = 0;
//     for ( i=0; i < num.length; i++)
//     {
//         result += num[i];
//     }
//     console.log(result);
// }
// add(1,2,4,8,9,8,7,5,1,0,2,5,8,7,9)

// let cars = {
//     title: "BMW",
//     price: 2000,
//     color: ["red", "Black", "White"],
//     model: 2020,
//     hello:function(i) {
//         console.log("Hello, World ". repeat(i))
//     }
// }
// cars.my = "Ebrahim"
// console.log(cars.my);


// let user = new Object();
// user.title = "BMW";
// console.log(user["title"]);

// let user = {
//     name: "Abdulrahman",
//     getName:function(){
//         return this.name;
//     },
// }
// console.log(user.getName())

// let x = this;
// console.log(x === window);


// let user1 = {
//     name: "Ebrahim",
//     getName:function(){
//         return `Hello ${this.name}`;
//     }
// }
// let user2 = Object.create(user1);
// user2.name = "ahmed";
// console.log(user2.getName())

// let a1 = {
//     num1: 1,
// }
// let a2 = {
//     num2: 2,
// }
// let a3 = {
//     num3: 3,
// }
// let a4 = Object.assign(a1,a2,a3)
// console.log(a4)


// let x = document.images[2];
// x.src = "Images/imgs/cat-04.jpg"

// console.log(x);

// let x = document.getElementById("container");

// x.innerHTML += "<p>Hello,World</p>";

// let element = document.getElementById("container");

// element.innerText = `Hello, World`;

// element.style.backgroundColor = "red"
// element.style.padding = "10px"
// element.style.borderLeft = "10px black solid"
// element.style.color = "white"


// document.body.innerHTML = `
// <h1>Ebrahim</h1>
// <h2>Ebrahim</h2>
// <p>Ebrahim</p>

// `

// let container = document.createElement("div")
// let head = document.createElement("h1")
// let img = document.createElement("img")

// let content = document.createTextNode("Hello, world")

// head.appendChild(content)
// img.src = "Images/imgs/avatar-01.png"
// img.alt = "avatar-01"

// container.appendChild(head)
// container.appendChild(img)

// document.body.appendChild(container)
// console.log(container)

// users = ["Ebrahim","Ahmed","Gamal","Abdo","Fathy" ]
// ageUsers = ["18","20","25","19","7" ]
// let container = document.createElement("div")
// document.body.appendChild(container)
// container.style.textAlign="center"
// function element( users , ageUsers){

//     //elements
//     let card = document.createElement("div")
//     let title = document.createElement("h2")
//     let age = document.createElement("p")
//     let img = document.createElement("img")

//     //content
//     let head = document.createTextNode(users)
//     let ageContent = document.createTextNode( ageUsers +" years old")
//     img.src = "Images/imgs/avatar-01.png"
//     img.alt = "img-1"

//     //link
//     title.appendChild(head)
//     age.appendChild(ageContent)
    
//     //style
//     container.style.display = "flex"
//     container.style.flexWrap = "wrap"
//     card.style.backgroundColor="#444"
//     card.style.width="fit-content"
//     card.style.color = "white"
//     card.style.padding = "20px"
//     card.style.margin = "2px"
    

//     card.appendChild(title)
//     card.appendChild(age)
//     card.appendChild(img)
//     container.appendChild(card)
// }
// for ( let i = 0 ; i < 10; i++)
// {
//     element(users[i],ageUsers[i])
// }

// btn.addEventListener("onmouseup", function(){
//     console.log("Hello, World");
// })

// text.onkeydown = ()=> {
//     console.log("Hello,World")
// }


// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");

// num1.onkeyup =() =>{
//     num2.value = Math.trunc(num1.value * 48.16);
// }
// num2.onkeyup =() =>{
//     num1.value = Math.trunc(num2.value / 48.16);
// }


// let after = document.getElementById("after");
// let before = document.getElementById("before");
// let inside = document.getElementById("inside");
// let content = document.getElementById("content")
// let container = document.getElementById("container")

// after.onclick = function(){
//     container.after(content)
// }
// before.onclick = function(){
//     container.before(content)
// }
// inside.onclick = function(){
//     container.append(content)
// }

// let ebrahim = document.getElementById("ebrahim");

// ebrahim.onclick = function() {
//     ebrahim.classList.toggle("name","hide")
// }
// ebrahim.oncontextmenu = function() {
//     ebrahim.classList.remove("name","hide")
// }

// let btnOpen = document.getElementById("open");
// let btnClose = document.getElementById("close");
// let navBar = document.getElementById("nav")

// btnClose.onclick = function(){
// navBar.classList.add("hide");
// btnClose.classList.add("hide");
// btnOpen.classList.remove("hide")
// }

// btnOpen.onclick = function(){
// navBar.classList.remove("hide");
// btnClose.classList.remove("hide")
// btnOpen.classList.add("hide")
// }

// let text = document.getElementById("txt");
// let btn = document.getElementById("btn");

// onload = function(){
//     text.focus()
//     btn.click()
//     text.placeholder = "Ebrahim Hammad"
// }
// btn.onclick = function(){
//     btn.style.backgroundColor= '#ffa';
// }

// let btn = document.getElementById("btn");

// onscroll = function(){
//     if(scrollY >= 400){
//         btn.classList.add('active')
//     }
//     else{
//         btn.classList.remove('active')
//     }
// }
// btn.onclick = function(){
//     window.scroll({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     })
// }


// console.log(screen.width)
// console.log(screen.availWidth)
// console.log(screen.height)
// console.log(screen.availHeight)
// console.log(screen.colorDepth)
// console.log(screen.orientation)
// console.log(screen.pixelDepth)

// let hello = setTimeout(function(){
//     console.log("Hello, World")
// },3000);

// clearTimeout(hello);

// let i = 0;

// let hema = setInterval(function(){
//     console.log(i++)
//     if (i == 4 ){
//         clearInterval(hema);
//     }
// }, 2000)

// localStorage.setItem("name","Ebrahim");
// console.log(localStorage.getItem("name"))

// sessionStorage.setItem("name","ebrahim")

// localStorage.setItem("age",JSON.stringify(25));
// localStorage.setItem("skills",JSON.stringify([1,2,3,4,5,6,7,8,9]));

// localStorage.setItem("users",JSON.stringify({
//     name: "Ebrahim",
//     age: 25,
// }))

// console.log(JSON.parse(localStorage.getItem("skills")))
// console.log(JSON.parse(localStorage.getItem("users")))

// localStorage.clear()

let title = document.getElementById("title");
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let del = document.getElementById("delete");
let delBtn = document.getElementById("delBtn")
let mood = "create"
let temp ;
let searchMood ='title';
let search = document.getElementById("search")

let getTotal = () => {
    if (price.value != "")
    {
        let totalValue = (+price.value + +taxes.value + +ads.value) - discount.value;
        total.innerHTML = totalValue;
        total.style.background = "green";
    }
    else {
        total.innerHTML ='';
        total.style.background = "#a00d02";
    }
}

submit.onclick = function(){
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads : ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }
    if (mood == "create"){
    if ( newPro.count > 1){
        for (let j = 0; j< newPro.count; j++){
            dataPro.push(newPro);
        }
    }
    else{
        dataPro.push(newPro);
        
    }
}
else {
    dataPro[temp] = newPro;
    mood = "create";
    submit.innerHTML="Create";
    count.style.display ="block"
}
localStorage.setItem("product", JSON.stringify(dataPro));
clearData()
showData()
}


let dataPro ;
if (localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
}
else {
    dataPro =[];
}


function clearData(){
        title.value= ""
        price.value= ""
        taxes.value= ""
        ads.value = ""
        discount.value= ""
        total.innerHTML= ""
        count.value= ""
        category.value= "";
}

function showData(){
    getTotal()
    let table = "";
    for (let i =0; i < dataPro.length; i++){
        table +=    `      <tr>
                            <td>${i}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].taxes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].total}</td>
                            <td>${dataPro[i].category}</td>
                            <td><button id="update" onclick="updateData(${i})">update</button></td>
                            <td><button id="delete" onclick ="deleteData(${i})">delete</button></td>
                        </tr>`;
    }
    document.getElementById("tbody").innerHTML= table;
    if (dataPro.length >0  ){
        delBtn.innerHTML = `<button>Delete All(${dataPro.length})</button>`
    }
    else{
        delBtn.innerHTML ="";
    }
}

delBtn.onclick = function(){
    localStorage.clear();
    dataPro.splice(0,); 
    showData()
}


showData();

let deleteData = (i)=> {
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}


function updateData(i){

    title.value =dataPro[i].title;
    price.value =dataPro[i].price;
    taxes.value =dataPro[i].taxes;
    ads.value =dataPro[i].ads;
    discount.value =dataPro[i].discount;
    category.value =dataPro[i].category;
    getTotal()
    count.style.display="none"
    submit.innerHTML = "Update";
    mood ="Update"
    temp = i;
    scroll({
        top:0,
        behavior: "smooth",
    },)
}

function getSearchMood(id){
    if( id == "searchByTitle" ){
        searchMood= "title"
        search.placeholder ="search by title"
    }
    else{
        searchMood ="category"
        search.placeholder= "search by category"
    }
   search.focus()
   search.value = "";
   showData()
}


function searchData(value){
    let table="";
if (searchMood =="title"){
    for (let i =0; i<dataPro.length; i++){
        if(dataPro[i].title.includes(value.toLowerCase())){

                    table +=    `      <tr>
                            <td>${i}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].taxes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].total}</td>
                            <td>${dataPro[i].category}</td>
                            <td><button id="update" onclick="updateData(${i})">update</button></td>
                            <td><button id="delete" onclick ="deleteData(${i})">delete</button></td>
                        </tr>`;
    }
    
}
}
else{
        for (let i =0; i<dataPro.length; i++){
        if(dataPro[i].category.includes(value.toLowerCase())){

                    table +=    `      <tr>
                            <td>${i}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].taxes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].total}</td>
                            <td>${dataPro[i].category}</td>
                            <td><button id="update" onclick="updateData(${i})">update</button></td>
                            <td><button id="delete" onclick ="deleteData(${i})">delete</button></td>
                        </tr>`;
    }
    
}
}
document.getElementById("tbody").innerHTML = table;
}


