document.addEventListener("DOMContentLoaded", () => {
  const draggableImages = document.querySelectorAll("img[draggable='true']");

  draggableImages.forEach((img) => {
    img.addEventListener("mousedown", (e) => {
      const img = e.target;
      const shiftX = e.clientX - img.getBoundingClientRect().left;
      const shiftY = e.clientY - img.getBoundingClientRect().top;

      const moveImage = (e) => {
        img.style.position = "absolute";
        img.style.zIndex = "1000";
        img.style.left = e.clientX - shiftX + "px";
        img.style.top = e.clientY - shiftY + "px";
      };

      const stopMoveImage = () => {
        document.removeEventListener("mousemove", moveImage);
        document.removeEventListener("mouseup", stopMoveImage);
      };

      document.addEventListener("mousemove", moveImage);
      document.addEventListener("mouseup", stopMoveImage);
    });

    img.ondragstart = () => false; // Disable default drag events for better control
  });
});
