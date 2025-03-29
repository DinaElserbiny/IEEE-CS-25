//تكلفه 1

let getelementby_id = document.getElementById("elzero");

let getelementby_tag = document.getElementsByTagName("div")[0];

let getelmentby_classname =document.getElementsByClassName("element")[0];
//---------
let queryselector_id = document.querySelector("#elzero");

let queryselector_class =document.querySelector(".element")[0];

let queryselector_tag =document.querySelector("div")[0];

let queryselector_atrr=document.querySelector("[name='js']");
//-------
let queryselectorall_id =document.querySelectorAll("#elzero");

let queryselectorall_class =document.querySelectorAll(".element")[0];

let queryselectorall_tag =document.querySelectorAll("div");

let queryselectorall_atrr=document.querySelectorAll("[name='js']");

//-------------------------------------------------------------------------------------------------

//تكلفه 2
let src_images = document.querySelectorAll("div:nth-of-type(2) img"); 
for (let i=0 ; i<src_images.length; i++) {
src_images[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
src_images[i].setAttribute("alt","Elzero Logo");
}

//-----------------------------------------------------------------

//تكلفه 3
document.querySelector("input[name='dollar']").addEventListener("input", function() {
    let dollarValue = parseFloat(this.value) || 0; // تأكد من أن الإدخال رقم
    let egpValue = (dollarValue * 15.6).toFixed(2); // التحويل مع تقليل الكسور إلى رقمين فقط
    document.querySelector(".result").textContent = `${dollarValue} USD Dollar = ${egpValue} Egyptian Pound`;
});
//-------------------------------------------------------------------------------------------------------

//تكلفه 4  
let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

// تبديل المحتوى
[firstDiv.textContent, secondDiv.textContent] = [secondDiv.textContent, firstDiv.textContent];

// تبديل العنوان (title)
[firstDiv.title, secondDiv.title] = [secondDiv.title, firstDiv.title];

// إضافة رقم 2 إلى العنصر الذي يحتوي على كلمة "Two"
secondDiv.textContent += " " + (firstDiv.textContent.length - secondDiv.textContent.length);
    
//-------------------------------------------------------------------------------------------------------
//تكلفه 5
let alt_image = document.querySelectorAll("div:nth-of-type(5) img");
for(let i=0 ; i<alt_image.length ;i++)
{
alt_image[i] = (alt_image[i].hasAttribute("alt"))? alt_image[i].setAttribute("alt" ,"Old") :alt_image[i].setAttribute("alt" ,"Elzero new");
}
//-------------------------------------------------------------------------------------------------------
//تكلفه 6


document.querySelector("input[type='submit']").addEventListener("click", function (event) {
    event.preventDefault(); 

    let inputs = document.querySelectorAll(".input");
    let nums = inputs[0]; 
    let text = inputs[1];
    let select = inputs[2];

    let results = document.querySelector(".results");
    results.innerHTML = ""; 

    for (let i = 1; i <= nums.value; i++) {
        let select_type = document.createElement(select.value);
        select_type.setAttribute("class", "box");
        select_type.setAttribute("title", "Element");
        select_type.setAttribute("id", `id-${i}`);
        select_type.textContent = text.value;
        
        
        select_type.style.background = "orange";
        select_type.style.margin = "10px";
        select_type.style.padding = "5px 20px";
        
        results.appendChild(select_type);
    }
});





