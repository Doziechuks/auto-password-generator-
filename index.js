const inputElement = document.querySelector("#input");
const copyElement = document.querySelector("#icon");
const timerElement = document.querySelector("#timer");
const popUpElement = document.querySelector("#altert-container");

let creatPassword = () => {
  let randomCharacters = "asdf12345+^!CVBXMN";
  let passwordLength = 6;
  let password = "";
  for (i = 0; i < passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * randomCharacters.length);
    password += randomCharacters.substring(randomPassword, randomPassword + 1);
  }
  inputElement.value = password;
  setInterval(creatPassword, 10000);
};
creatPassword();

let countDown = () => {
  let numCount = 10;
  let counter = setInterval(timer, 1000);
  function timer() {
    numCount--;
    timerElement.innerText = numCount;
    if (numCount === 0) {
      numCount = 10;
    }
  }
};
countDown();

let copyPassword = () => {
  inputElement.select();
  inputElement.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputElement.value);
  if(inputElement.value){
    popUpElement.classList.remove('active');
  }
  setTimeout(timeOut, 1000);
  function timeOut(){
    popUpElement.classList.add('active');
  }
  
}

copyElement.addEventListener('click', () =>{
  copyPassword();
});
