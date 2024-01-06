const hamburger= document.querySelector(".hamburger");
const hoverDiv=document.querySelector(".hover-div");
const section1=document.querySelector(".section1");
const nameInp=document.querySelector(".name");
const emailInp=document.querySelector(".email");
const numberInp=document.querySelector(".phone");
const message=document.querySelector(".message");
const submitBtn=document.querySelector(".submit-btn");
const thanksDiv=document.querySelector(".thanks-div");
const inputDiv=document.querySelector(".section1-contact")
let menOpen=false
hamburger.addEventListener("click",() =>{
  if (!menOpen){
    hamburger.classList.add('open');
    hoverDiv.style.display="block";
    // section1.style.opacity=0.5
    menOpen=true;
  }else{
    hamburger.classList.remove('open');
    hoverDiv.style.display="none";
    // section1.style.opacity=1
    menOpen=false;
  }
})
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  if (!nameInp.value) {
    nameInp.style.borderColor = "hsla(0, 100%, 66%, 1)";
  } else {
    nameInp.style.borderColor = ""; // Reset the border color if there is a value
  }

  if (!emailInp.value) {
    emailInp.style.borderColor = "hsla(0, 100%, 66%, 1)";
  } else {
    emailInp.style.borderColor = "";
  }

  if (!numberInp.value) {
    numberInp.style.borderColor = "hsla(0, 100%, 66%, 1)";
  } else {
    numberInp.style.borderColor = "";
  }

  if (!message.value) {
    message.style.borderColor = "hsla(0, 100%, 66%, 1)";
  } else {
    message.style.borderColor = "";
  }

  // Check if all fields are filled before submitting
  if (nameInp.value && numberInp.value && emailInp.value && message.value) {
    inputDiv.style.display = "none";
    thanksDiv.style.display = "block";
  }
}

submitBtn.addEventListener("click", handleSubmit);
