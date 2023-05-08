const kaleidoscope = document.getElementById('kaleidoscope');
const backgroundImage = 'url("5.png")';
const pieces = 10;

function createPiece() {
  const piece = document.createElement('div');
  piece.classList.add('kaleidoscope-piece');
  piece.style.backgroundImage = backgroundImage;
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
    kaleidoscope.appendChild(createPiece());
  }
  updatePieces(window.innerWidth / 4, window.innerHeight / 4);
}

initKaleidoscope();

window.addEventListener('mousemove', (e) => {
  updatePieces(e.clientX, e.clientY);
});
