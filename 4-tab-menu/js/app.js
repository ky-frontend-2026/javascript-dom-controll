const menuList = document.querySelectorAll(".menu li");
const contentList = document.querySelectorAll(".content");
let i = 0;

init(i);

function init(x) {
 menuList[x].classList.add("active");
 contentList[x].classList.add("on");
}

function reset() {
 for (let i = 0; i < menuList.length; i++) {
  menuList[i].classList.remove("active");
  contentList[i].classList.remove("on");
 }
}

menuList.forEach((menu, index) => {
 menu.addEventListener("click", () => {
  // console.log(menu,index)
  reset();
  init(index);
 });
});
