const bar1 =  document.querySelector("div.bar1").classList;
const bar2 =  document.querySelector("div.bar2").classList;
const bar3 = document.querySelector("div.bar3").classList;
const nav =  document.querySelector("nav.nav-container").classList;


function handleButton(){
  
    bar1.toggle("bar-close-top");
    bar2.toggle("bar-hide");
    bar3.toggle("bar-close-bottom");
    nav.toggle("nav-drop");
}

