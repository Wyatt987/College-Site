

const height = document.getElementById('height');
const Left = document.getElementById('Left');
const Right = document.getElementById('Right');
  function ScrollDown() {
    height.classList.remove('d-none');
    Left.classList.remove('d-none');
    Right.classList.remove('d-none');
    Left.classList.add('left');
    Right.classList.add('right');
  }

