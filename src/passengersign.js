const sign_in_btn=document.querySelector("#sign-in-btn");
const sign_up_btn=document.querySelector("#sign-up-btn");
const container=document.querySelector(".container");

sign_up_btn.addEventListener('click',()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click',()=>{
    container.classList.remove("sign-up-mode");
});
const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const selectBtn = document.querySelector(".select");
const showBtn= document.querySelector(".botton-img");
const img = document.querySelector(".preview-img");
var popup= document.querySelector('.popup');
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive(){
  defaultBtn.click();
}

showBtn.addEventListener("click",function(){
   popup.classList.toggle("show");
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
      showBtn.value="Upload Photo";
      wrapper.classList.remove("active");
    })

    selectBtn.addEventListener("click",function(){
      popup.classList.toggle("show");
      showBtn.value=file.name;
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
