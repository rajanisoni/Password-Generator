let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// GENERATES ONE RANDOM CHARACTOR

 function randomCharacters(){
     let randomNum= Math.floor(Math.random() * (characters.length +1) );
      let randomChar = characters[randomNum];
      return randomChar
 }

// DELCEARE VARIABLES
 let btnEl1= document.getElementById("button-el1")
 let btnEl2= document.getElementById("button-el2")



 function getPasswords(){

  //PUSH RANDOM CHARACTOR 16 TIMES IN ARR1 AND ARR2 AND CONVERT IN A STRING
  let arr1 =[];
  for (let i =0 ; i<16; i++){
      arr1.push(randomCharacters())
    let pass2 = arr2.join("");


  //CHANGES THE TEXTCONTENT OF BUTTONS INTO THE PASSWORD
      btnEl1.textContent=pass1;
      btnEl2.textContent=pass2;


  //ONCLICK TO COPY THE PASSWORDS
  btnEl1.addEventListener("click",function(){
    navigator.clipboard.writeText(btnEl1.textContent)
    alert("Copied")
  })

  btnEl2.addEventListener("click",function(){
    navigator.clipboard.writeText(btnEl2.textContent)
    alert("Copied")
  })}}

  
