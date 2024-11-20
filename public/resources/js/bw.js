//creates all of the divs with unique ids (though they already have unique item #) - scraped
//from StackExchange

const container = document.getElementById("container");

for (let i = 0; i < 10000; i++) {
  const item = document.createElement("div");

  item.classList.add("item", "item-" + i);

  item.id = i;
  
  container.appendChild(item);
}

addEventListener('keydown', function() {
  console.log("keydown")
})

addEventListener('click', function() {
  console.log("click")
})

addEventListener('mouseover', function() {
  console.log("mouseover")
})

addEventListener('mousedown', function() {
  console.log("mousedown")
})  
// const kbdEvent = new KeyboardEvent("syntheticKey", false);
// console.log(kbdEvent.isComposing); // return false



//this is an experiment to see if I can get an
//event listener on mouseover + click
// document.getElementByClass("div").addEventListener("click", function() {
//   console.log("div clicked");
// });