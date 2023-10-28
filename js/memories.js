// I don't know if this will work, but we can try..... -fs64
// https://codingartistweb.com/2022/06/testimonial-slider-using-javascript/ heavily modified from this -64
console.info("Loading memories.js...");
let memories = "../conf/memories.json" // File containing the memories 
let cm = 0; // (C)urrent (m)emory
let l = memories.length; // Total file length

console.info(`Found ${l} memory keys!`);
let memoriesBox = document.getElementById("memoriesBox");
let nxtBtn = document.getElementById("next");
let bckBtn = document.getElementById("prev");
// Get our memeoriesBox and buttons from HTML elements on the HTML page

nxtBtn.addEventListener("click", () => {
    cm = (l + cm + 1) % l; 
    displayMemory();
}); // Switch to the next memory
nxtBtn.addEventListener("click", () => {
    cm = (l + cm - 1) % l; 
    displayMemory();
}); // Switch back to the previous memory, nopony tell anyone else that we copied this :^) -64

let displayMemory = () => {
    displayMemory.innerHTML = `
    <h2>${memoriesBox[cm].name}</h2>
    <p>${memoriesBox[cm].memory}</p>
    `;
};
window.onload = displayMemory;
console.info("Done!");
