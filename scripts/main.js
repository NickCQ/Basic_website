/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
let myImage = document.querySelector('img');
myImage.onclick = () =>{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "data:image/jpeg;base64,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")
{
    myImage.setAttribute('src','https://p7.hiclipart.com/preview/127/110/359/firefox-icon-firefox-png-logo.jpg')
} else {
    myImage.setAttribute('src',"data:image/jpeg;base64,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")
}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }