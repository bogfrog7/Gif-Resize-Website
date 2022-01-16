const gitButton = document.getElementById("githubButton");
const input = document.getElementById("fileInput");

let started = false

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
  console.log(" |log| Loaded in a file")
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image()

    if (input.files[0]["type"] == "image/gif"){
        RenderImage(image, reader);
        input.remove();
    }else{
      alert("The file type has to be a gif");
      console.warn("|log|'The file must be a gif'")
    }
  };
  reader.readAsDataURL(input.files[0])

}
gitButton.onclick = () => {
  window.open("https://github.com");
};
