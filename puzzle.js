let rows = 5;
let columns = 5;
let imgOrder = [];

// Membuat urutan gambar (1.jpg sampai 25.jpg)
for (let i = 1; i <= rows * columns; i++) {
    imgOrder.push(i);
}

let turns = 0;
let currTile;
let otherTile;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            // === BUAT KONTAINER TILE ===
            let tileContainer = document.createElement("div");
            tileContainer.classList.add("tile");

            // === BUAT GAMBAR ===
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            // === SIMPAN NOMOR DALAM ATTRIBUT ===
            let num = tile.src.split("/").pop().replace(".jpg", "");
            tileContainer.setAttribute("data-number", num);

            // === EVENT UNTUK DRAG DAN DROP ===
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            // === TAMBAHKAN KE BOARD ===
            tileContainer.appendChild(tile);
            document.getElementById("board").append(tileContainer);
        }
    }
};

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    // Tukar gambar antar tile
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
