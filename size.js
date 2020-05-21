const canvasWidth = document.querySelector('.width-container');
const canvasHeight = document.querySelector('.height-container');
const inputWidth = canvasWidth.querySelector('.width');
const inputHeight = canvasHeight.querySelector('.height');

function handleSizeWidth(e) {
  if (e.keyCode === 13) {
    const saveData = canvas.toDataURL();

    var widthValue = parseInt(e.target.value);
    canvas.width = widthValue;
    inputWidth.value = '';

    // 원래 있던 그림 그대로 옮기기 위해
    let img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
    img.src = saveData;
  }
}

function handleSizeHeight(e) {
  if (e.keyCode === 13) {
    const saveData = canvas.toDataURL();

    var heightValue = parseInt(e.target.value);
    canvas.height = heightValue;
    inputHeight.value = '';

    // 원래 있던 그림 그대로 옮기기 위해
    let img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
    img.src = saveData;
  }
}

function saveCurrentValue() {
  return imaging;
}

function restoreCurrentValue() {}

inputWidth.addEventListener('keydown', handleSizeWidth);
inputHeight.addEventListener('keydown', handleSizeHeight);
