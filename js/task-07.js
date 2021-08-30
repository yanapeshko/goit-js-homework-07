const changingFont = document.getElementById('font-size-control');

const text = document.getElementById('text');

changingFont.oninput = function () {
  text.style.fontSize = changingFont.value + 'px';
};
