const title=document.getElementById('title');
const des=document.getElementById('des');
const btn=document.getElementById("btn");
const container=document.querySelector(".container");
const newtodo=document.getElementById("neww");




// const container=document.createElement('div'); 
let  createDiv;

function randomm(){
    const hue = Math.random() * 360;
const lightness = Math.random() * 76;
const randomColor = `hsl(${hue}, 100%, ${30+lightness}%)`
return randomColor;
}
function createe(){
    
    createDiv=document.createElement("div")
    createDiv.style.backgroundColor=randomm();
  
    createDiv.classList.add('ddiv')
    container.appendChild(createDiv);
}

function add(){

const createP=document.createElement("p");
// const titlenode=document.createTextNode(title.value)
// console.log(titlenode);
// const desnode=document.createTextNode(des.value);
// console.log(des.value)
// createP.appendChild(titlenode);
// createP.appendChild(desnode);
let t;
if(des.value==""){
     t=document.createTextNode(`${title.value}`)
} else{
     t=document.createTextNode(`${title.value} : ${des.value}`)

  
}

createP.appendChild(t);
createDiv.appendChild(createP);

createP.addEventListener("click",()=>{
    if (createP.style.textDecoration==="line-through") {
       createP.style.textDecoration="none"
    }
else{
        createP.style.textDecoration="line-through"
    }
});



}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    add();
    
    title.value="";
    des.value="";
});
neww.addEventListener("click",(e)=>{
    e.preventDefault();
    createe();
})