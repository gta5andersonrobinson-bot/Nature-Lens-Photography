function upDate(previewPic) {
  console.log("Event triggered!");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}