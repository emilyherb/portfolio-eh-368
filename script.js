// Select all draggable images
const draggableImages = document.querySelectorAll("img[draggable='true']");
const aboutMeSection = document.getElementById("about-me");

draggableImages.forEach(image => {
  image.addEventListener("dragstart", event => {
    // Store the image's ID when dragging starts
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});

aboutMeSection.addEventListener("dragover", event => {
  event.preventDefault(); // Allow drop by preventing default behavior
});

aboutMeSection.addEventListener("drop", event => {
  event.preventDefault();

  // Get the ID of the dragged image
  const imageId = event.dataTransfer.getData("text/plain");
  const image = document.getElementById(imageId);

  // Calculate the new position of the image relative to the section
  const sectionRect = aboutMeSection.getBoundingClientRect();
  const offsetX = event.clientX - sectionRect.left;
  const offsetY = event.clientY - sectionRect.top;

  // Update the image's position
  image.style.left = `${offsetX - image.offsetWidth / 2}px`;
  image.style.top = `${offsetY - image.offsetHeight / 2}px`;
});
