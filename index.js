function main() {
  const el = document.querySelector(".cuadrado");
  const body = document.body;

  document.addEventListener("keydown", (event) => {
    const text = el.style.marginLeft.replace("px", "");
    const marginLeft = parseInt(text || "0");
    let newMarginLeft = marginLeft;

    const text2 = el.style.height.replace("px", "");
    const height = parseInt(text2 || "20");
    let newHeight = height;

    const text3 = el.style.width.replace("px", "");
    const width = parseInt(text3 || "20");
    let newWidth = width;

    console.log(event.code);
    if (event.code == "ArrowLeft") {
      newMarginLeft--;
    } else if (event.code == "ArrowRight") {
      newMarginLeft++;
    } else if (event.code == "ArrowUp") {
      newHeight++;
      newWidth++;
    } else if (event.code == "ArrowDown") {
      newHeight--;
      newWidth--;
    } else if (event.code == "KeyB") {
      el.style.backgroundColor = "#0000ff";
    } else if (event.code == "KeyR") {
      el.style.backgroundColor = "#ff0000";
    } else if (event.code == "KeyG") {
      el.style.backgroundColor = "#00ff00";
    } else if (event.code == "KeyY") {
      el.style.backgroundColor = "#FFF700";
    } else if (event.code == "KeyV") {
      el.style.backgroundColor = "#E000FF";
    } else if (event.code == "KeyO") {
      el.style.backgroundColor = "#FF8F00";
    } else if (event.code == "KeyW") {
      el.style.backgroundColor = "#ffffff";
      body.style.backgroundColor = "#000000";
    } else if (event.code == "Backspace") {
      body.style.backgroundColor = "#ffffff";
    }

    el.style.width = newWidth + "px";
    el.style.height = newHeight + "px";
    el.style.marginLeft = newMarginLeft + "px";
    console.log(newMarginLeft);
  });
}

main();
