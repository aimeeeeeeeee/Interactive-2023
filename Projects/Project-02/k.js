const kaleidoscope = document.getElementById('kaleidoscope');
const backgroundImage1 = 'url("1.png")';
const backgroundImage2 = 'url("2.png")';
const backgroundImage3 = 'url("3.png")';
const backgroundImage4 = 'url("4.png")';
const backgroundImage5 = 'url("5.png")';
const pieces =10;

function createPiece1() {
  const piece = document.createElement('div');
  piece.classList.add('kaleidoscope-piece');
  piece.style.backgroundImage = backgroundImage1;
  return piece;
}

function createPiece2() {
  const piece = document.createElement('div');
  piece.classList.add('kaleidoscope-piece');
  piece.style.backgroundImage = backgroundImage2;
  return piece;
}

function createPiece3() {
  const piece = document.createElement('div');
  piece.classList.add('kaleidoscope-piece');
  piece.style.backgroundImage = backgroundImage3;
  return piece;
}

function createPiece4() {
  const piece = document.createElement('div');
  piece.classList.add('kaleidoscope-piece');
  piece.style.backgroundImage = backgroundImage4;
  return piece;
}

function createPiece5() {
  const piece = document.createElement('div');
  piece.classList.add('kaleidoscope-piece');
  piece.style.backgroundImage = backgroundImage5;
  return piece;
}

function updatePieces(x, y) {
  const rect = kaleidoscope.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  for (let i = 0; i < pieces; i++) {
    const piece = kaleidoscope.children[i];
    const rotation = (360 / pieces) * i;
    piece.style.transform = `translate(-50%, -50%) translate(${centerX}px, ${centerY}px) rotate(${rotation}deg)`;
    piece.style.backgroundPosition = `${x}px ${y}px`;
  }
}

function initKaleidoscope() {
   for (let i = 0; i < pieces; i++) {
  //   kaleidoscope.appendChild(createPiece());
  // }
  kaleidoscope.appendChild(createPiece1());
  kaleidoscope.appendChild(createPiece2());
  kaleidoscope.appendChild(createPiece3());
  kaleidoscope.appendChild(createPiece4());
  kaleidoscope.appendChild(createPiece5());
}
  updatePieces(window.innerWidth / 4, window.innerHeight / 4);
}

initKaleidoscope();

window.addEventListener('mousemove', (e) => {  //lambda表达式
  updatePieces(e.clientX, e.clientY);
});
