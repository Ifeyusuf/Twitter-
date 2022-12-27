const btns= document.querySelector(".btn-count");
const value= document.getElementById("value");

let count=0

btns.addEventListener("click", function (){
        count ++
    
value.textContent= count;
})

// SECOND INCREASE
const values= document.getElementById("values");

const show= document.getElementById("show");
const btnCount= document.querySelectorAll(".btn-counts");

let counts=0
let sCount=0

btnCount.forEach (function (btn){
    btn.addEventListener("click", function (){
            counts ++
            values.textContent= counts;
     
    })
})

// LOVE COLOR
const love= document.querySelectorAll(".love");
love.forEach ( function (loves){

    loves.addEventListener("click", () => {
        loves.classList.toggle("love-bg")
    })
});

// DARK MODE
// const btnToggler= document.querySelector(".btn-toggler")

// btnToggler.addEventListener ("click", function (){

//     document.body.classList.toggle("dark");

// })

// TEXTAREA LENGTH


const textAraea= document.getElementById("text-length");

const wordLength= document.querySelector(".word-length");


let maxChar=150;
textAraea.addEventListener("input", () => {
    
    let textAreas= document.getElementById("text-length");
    let sum=maxChar - textAreas.value.length;

        wordLength.innerHTML=sum;
const texts= textAreas.value;

if(texts.length >= maxChar){
   wordLength.style.color= "red"
}
else{
    wordLength.style.color= "black"
}
 if (texts.length > maxChar){
    textAreas.style.color= "red"
}
else{
    textAreas.style.color= "black"
}
})
// HAMBUGER
const profile= document.querySelectorAll(".profile");
const links= document.querySelector(".links");

profile.forEach ( (profiles) =>{
    profiles.addEventListener("click", () => {
        // if(links.classList.contains("show")){
            links.classList.add("show")
        //    }
        //    else{
        //     links.classList.add("show")
        //    }
    })
})

// CLOSE
let container= document.querySelector(".container")
container.addEventListener ("mousedown", (e) => {
   if(e.target !== links ){
    links.classList.remove("show");
   }
})

const bShow= document.querySelector(".dots");
const linkk= document.querySelector(".linkk");
bShow.addEventListener("click", () => {
    linkk.classList.toggle("b-show")
}) 



