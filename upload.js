const browseBtn = document.querySelector('.browse-btn'),
  realInput = document.querySelector('#real-input');

function readInputFile(e) {
  var file = e.target.files;

  var reader = new FileReader();
  reader.onload = function (e) {
    var img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file[0]);
}

browseBtn.addEventListener('click', () => {
  realInput.click();
});

realInput.addEventListener('change', readInputFile);
