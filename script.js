const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//looping through each option image element
optionImages.forEach((Image,index) => {
Image.addEventListener("click", (e) =>{
    Image.classList.add("active");

    // looping through each option image again
    optionImages.forEach((image2, index2)=>{
        index !== index2 && image2.classList.remove("active");
        //let imageSrc =
    });
    gameContainer.classList.add("start");

    
   let time = setTimeout(() =>{
    //setting the timeout dely
    gameContainer.classList.remove("start");
 // get the source of the clicked option image
 let imageSrc=e.target.querySelector("img").src;
 // set the user image to the clicked option image
  userResult.src = imageSrc;

  //generatining a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);
 //creating an array of CPU image options
 let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];
 // Setting the CPU image to a random option from the array
 cpuResult.src = cpuImages[randomNumber];
 //assigning the letter value 
 let cpuValue = ["R","P","S"][randomNumber];
 //assigning a letter value to the clicked option
 let userValue = ["R", "P","S"][index];
//Creating an object with possible outcomes
let outcomes = {
  RR: "Draw",
  RP: "Cpu",
  RS: "User",
  PP: "Draw",
  PR: "User",
  PS: "Cpu",
  SS: "Draw",
  SR: "Cpu",
  SP: "User",
};
//looking for outcomes based on both user an CPU value
let outComeValue = outcomes[userValue + cpuValue];
//displaying the result
result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
   },2500);
});
});