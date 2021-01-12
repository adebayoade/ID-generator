// const html2canvas = require('html2canvas');

const nameInput = document.getElementById('name');
nameInput.onkeyup = () => {
  idNumber = Math.floor(Math.random() * 1000 + 1);
  document.querySelector('#id-card-name').textContent = nameInput.value;
  document.querySelector('#id-no').textContent =
    nameInput.value.slice(0, 3) + idNumber;
};

const positionInput = document.getElementById('position');
positionInput.onkeyup = () => {
  document.querySelector('#id-position').textContent = positionInput.value;
};

const branchInput = document.getElementById('branch');
branchInput.onkeyup = () => {
  document.querySelector('#id-branch').textContent = branchInput.value;
};

idNumber = Math.floor(Math.random() * 1000 + 1);

// Bind mugshot
document.getElementById('mugshot').addEventListener('change', function () {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function (e) {
      var img = document.getElementById('id-card-mugshot');
      img.src = e.target.result;
    };
    FR.readAsDataURL(this.files[0]);
  }
});

// copied code
const downloadCharacterSheet = () => {
  const node = document.getElementById('id-card');

  html2canvas(node).then((canvas) => {
    // document.body.appendChild(canvas)
    // var img    = canvas.toDataURL("image/png");
    // document.write('<img src="'+img+'"/>');
    var link = document.createElement('a');
    link.download = 'idcard.png';
    link.href = canvas.toDataURL();
    link.click();
  });
};

downloadBtn = document.getElementById('form');
downloadBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  downloadCharacterSheet();
});



var node = document.getElementById('id-card');

domtoimage.toPixelData(node).then(function (pixels) {
  for (var y = 0; y < node.scrollHeight; ++y) {
    for (var x = 0; x < node.scrollWidth; ++x) {
      pixelAtXYOffset = 4 * y * node.scrollHeight + 4 * x;
      /* pixelAtXY is a Uint8Array[4] containing RGBA values of the pixel at (x, y) in the range 0..255 */
      pixelAtXY = pixels.slice(pixelAtXYOffset, pixelAtXYOffset + 4);
    }
  }
});
