let div = document.getElementById("container");
let catbtn = document.getElementById("catbtn");
let dogbtn =  document.getElementById("dogbtn");
const CatURL = "https://cataas.com/api/cats?tags=cute";


const getCat = async () =>{
console.log("getting data....");
 let catresponse = await fetch(CatURL);
 console.log(catresponse);
 let catresult = await catresponse.json();
 console.log(catresult);

 catresult.forEach((image)=>{
   let  imgId  = image.id;
    let imgUrl = `https://cataas.com/cat/${imgId}`;

    let catImg = document.createElement("img");
    catImg.src = imgUrl;
    catImg.alt = "Very Cute Cat!";
    catImg.classList.add("cat-img");
     div.appendChild(catImg);
    
 });
}



let dogURL = "https://dog.ceo/api/breeds/image/random/10";

const getDog = async () =>  {
  let dogresponse = await fetch(dogURL);
  dogresult = await dogresponse.json();

  dogresult.message.forEach((imgUrl)=>{
    let dogimg = document.createElement("img");
    dogimg.src = imgUrl;
    dogimg.alt = "cute dog";
    dogimg.classList.add("dog-img");
    div.appendChild(dogimg);
  });

}



catbtn.addEventListener("click",()=>{
  getCat();
  // div.appendChild(dogimg) = "none";
  document.querySelectorAll(".dog-img").forEach((dog)=>{
    dog.style.display = "none";
  });
});




dogbtn.addEventListener("click",()=>{
  getDog();
   document.querySelectorAll(".cat-img").forEach((cat)=>{
    cat.style.display = "none";
  });
});

