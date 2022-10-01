var characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// when i click on generate password
// it sould get random 15 characters
// math.random, arr index , arr.slice
// buttons should show passwords

// 0.00- 91.999
// 0  -  91

 function randomCharacters(){
     let randomNum= Math.floor(Math.random() * (characters.length +1) );
      let randomChar = characters[randomNum];
      return randomChar
     
 }
 
  
  let arr1 =[];
  for (let i =0 ; i<16; i++){
      arr1.push(randomCharacters())
     }
     let pass1 = arr1.join("");
     
     let arr2 =[];
  for (let i =0 ; i<16; i++){
      arr2.push(randomCharacters())
      }
    let pass2 = arr2.join("");
  
  
  let paraEl1= document.getElementById("para-el1")
  let paraEl2= document.getElementById("para-el2")
  function getPasswords(){
    
      paraEl1.textContent=pass1;
      paraEl2.textContent=pass2;
      
  }
  
  
  
  