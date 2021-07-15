const sign_in_btn=document.querySelector("#sign-in-btn");
const sign_up_btn=document.querySelector("#sign-up-btn");
const container=document.querySelector(".container");
const form_sign_up_btn=document.querySelector("#form-sign-up-button");
const submitbtn=document.querySelector('#verify-submit-button');
const h3=document.querySelector(".right-panel > .content > h3");

sign_up_btn.addEventListener('click',()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click',()=>{
    container.classList.remove("sign-up-mode");
});

form_sign_up_btn.addEventListener('click',()=>{
  container.classList.add("verification-mode");
  h3.textContent="You need to provide some images for security.";
})




const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const selectBtn = document.querySelector("#select-btn i");

const img = document.querySelector(".preview-img");
var popup= document.querySelector('.popup');
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive(){
  defaultBtn.click();
}

var selectedBtn;

document.querySelectorAll('.button-img').forEach(item => {
  item.addEventListener('click', event => {
    selectedBtn=item;
    popup.classList.add("show");
  })
})


defaultBtn.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(){
      const result = reader.result;
      img.src = result;
      console.log(file.name);
      wrapper.classList.add("active");
    }
    cancelBtn.addEventListener("click", function(){
      img.src = "";
      console.log(selectedBtn);
      selectedBtn.value="Upload Photo";
      wrapper.classList.remove("active");
    })

    selectBtn.addEventListener("click",function(){
      popup.classList.remove("show");
      selectedBtn.value=file.name;
      img.src="";
      wrapper.classList.remove("active");
    })
    reader.readAsDataURL(file);
  }
  if(this.value){
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
    console.log(valueStore[0]);
    
  }
});

$(".menu-toggle-btn").click(function(){
  $(".navigation_bar_class").toggleClass("active");
});