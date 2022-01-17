const gitButton = document.getElementById("githubButton");
const input = document.getElementById("fileInput");

const heightInput = document.getElementById("height_input");
const widthInput = document.getElementById("width_input");
const resizeButton = document.getElementById("resize_button");

let started = false
let height = 0
let width  = 0

resizeButton.onclick = () => {
  if (height_input.value < 10 || widthInput.value < 10){
    alert("[MESSAGE] Warning the values specified should be more than 10")
    console.warn("[LOG] Resize values were incorrect")
  }else{
     height = height_input.value;
     width = widthInput.value;
  }
}
const RenderImage = (image, reader) => {
  image.onload = () => {
    image.height = 200
    image.width = 200
  }
  image.src = reader.result
  let container = document.getElementById("imageBox");
  container.appendChild(image)
}

input.onchange = () => {
  console.log("[LOG] Loaded in a file")
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image()

    if (input.files[0]["type"] == "image/gif"){
        RenderImage(image, reader);
        input.remove();
    }else{
      alert("The file type has to be a gif");
      console.warn("[LOG] 'The file must be a gif'")
    }
  };
  reader.readAsDataURL(input.files[0])

}
gitButton.onclick = () => {
  window.open("https://github.com");
};
