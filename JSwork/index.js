/*console.log("Hello world");
var a=12;
console.log("a="+a);
if(a>10){
    a=30;
    console.log("new a="+a);
}
console.log("Hello",a);
let a="12";
let b=12;*/
/*function sum(a,b){
    return a+b;
}
let total=sum(23,34,56);
console.log(total);

function cCompiler(){
return "c compiler selected";
}
function javaCompiler(){
return "java compiler selected";
}
function selectLanguage(clbk){
console.log("Hi,you have selected"+clbk);
}
selectLanguage(cCompiler());*/


/*console.dir(document);
const div=document.getElementsByClassName("parent");
console.log(div);
div.innertext="ABES";
div[0].innerHTML="<h2 style=color:red>abes</h2>";
document.createElement("h1");
h1.innertext="element is created by dom funtion";
h1.style.backgroundColor="cyan";
h1.style.color="red";
div[0].appendChild(h1);

console.log(h1);
document.createElement('img');
img.src='jewellery.jpeg';
img.setAttribute("height","200px")
console.log(img);
div[0].appendChild(img);*/
/*const button=document.getElementById("btn");
console.log(button);
const display=document.getElementById("disp");
console.log(display);
getData=()=>{
    console.log("Calling data function");
    display.innerHTML="<h3>welcome</h3>";
}
button.addEventListener("click",getData);
*/
/*const promise1=new Promise(
    (resolve,reject)=>{
        let a=12;
        if(a>10){
            resolve("value of a is resolve");
        }
        else{
             reject("a is rejected")
        }
    }
);
promise1.then((msg)=>{console.log(msg)})
.catch(error=>{console.log(error)})
.finally(msg=>{console.log("All resources have been closed")});*/
/*const promise2=new Promise(
    (resolve,reject)=>{
        resolve({name:Anshika,branch:"CSE"});
    }
);
promise2.then((data)=>{console.log(data.name)})
.catch(error=>{console.log(error)});
*/
const response=fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].title +" "+res.products[0].title)
    }
)
})