const gitButton = document.getElementById("githubButton");
const input = document.getElementById("fileInput");
let started = false

input.onchange = () => {
  const reader = new FileReader();

  reader.onload = () => {
    const image = new Image()
    image.onload = () => {
      image.height = 200
      image.width = 200
    }
    image.src = reader.result
    let container = document.getElementById("imageBox");
    if (input.files[0]["type"] == "image/gif"){
        container.appendChild(image)
    }else{
      alert("The file type has to be a gif");
    }
  };
  reader.readAsDataURL(input.files[0])

}
gitButton.onclick = () => {
  window.open("https://github.com");
};
