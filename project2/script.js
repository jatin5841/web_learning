const red=document.querySelector(".red");
const blue=document.querySelector(".blue");
const orange=document.querySelector(".orange");
const yellow=document.querySelector(".yellow");
const green=document.querySelector(".green");

// console.log(window.getComputedStyle(red).backgroundColor);



const bgColor= (selectedElement) => {
return window.getComputedStyle(selectedElement).backgroundColor;
}

// var orangeElementColor= bgColor(orange);

// orange.addEventListener("mouseenter",() => {

// document.body.style.backgroundColor=orangeElementColor;
// });

const colorChanger = (element,color) => {
return element.addEventListener("mouseenter", () => {
	document.body.style.backgroundColor=color;
});
};

colorChanger(red,bgColor(red));
colorChanger(blue,bgColor(blue));
colorChanger(green,bgColor(green));
colorChanger(yellow,bgColor(yellow));
colorChanger(orange,bgColor(orange));