// I don't know if this will work, but we can try..... -fs64
// https://codingartistweb.com/2022/06/testimonial-slider-using-javascript/ heavily modified from this -64
console.info("Loading memories.js...");


// browser js is so bootleg
let memories; // contain the memories 
let cm = 0; // (C)urrent (m)emory
// Get our memeoriesBox and buttons from HTML elements on the HTML page
let memoriesBox = document.getElementById("memoriesBox");
let nxtBtn = document.getElementById("next");
let bckBtn = document.getElementById("prev");
let displayMemory = () => {
    memoriesBox.innerHTML = `
    <h2>${memories[cm].name}</h2>
    <p>${memories[cm].memory}</p>
    `;
};
(async() => {
    await fetch("./conf/memories.json").then(r=>r.json()).then(d=>memories=d).catch(e=>{
        // error code when fetching here
        console.log(e)
    });

    let l = memories.length; // Total file length
    console.info(`Found ${l} memory keys!`);

    nxtBtn.addEventListener("click", () => {
        cm = (l + cm + 1) % l; 
        displayMemory();
    }); // Switch to the next memory
    bckBtn.addEventListener("click", () => {
        cm = (l + cm - 1) % l; 
        displayMemory();
    }); // Switch back to the previous memory, nopony tell anyone else that we copied this :^) -64

    displayMemory(); // This will executed as soon as all the above has. -TCG
})();
console.info("Done!");
