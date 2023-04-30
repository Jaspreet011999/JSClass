// Fetch images from the API
async function fetchImages() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const images = await response.json();
    return images;
  } catch (error) {
    console.error("Failed to load images:", error);
    return [];
  }
}
// Render images on the DOM
async function renderImages() {
  const imageContainer = document.querySelector(".image");
  const images = await fetchImages();

  // Clear existing images
  imageContainer.innerHTML = "";

  // Render fetched images
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.title;
    imageContainer.appendChild(imgElement);
  });
}

// Call the renderImages function to fetch and render images
renderImages();
