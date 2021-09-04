function main() {
  const el = document.querySelector(".cuadrado");

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
    }

    el.style.width = newWidth + "px";
    el.style.height = newHeight + "px";
    el.style.marginLeft = newMarginLeft + "px";
    console.log(newMarginLeft);
  });
}

main();
