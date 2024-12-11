document.addEventListener("DOMContentLoaded", () => {
  const draggableImages = document.querySelectorAll("img[draggable='true']");
  const grid = document.getElementById("about-me"); // Assuming images should stay within #about-me

  draggableImages.forEach((img) => {
    img.addEventListener("mousedown", (e) => {
      const shiftX = e.clientX - img.getBoundingClientRect().left;
      const shiftY = e.clientY - img.getBoundingClientRect().top;

      const moveImage = (e) => {
        let newLeft = e.clientX - shiftX;
        let newTop = e.clientY - shiftY;

        // Calculate boundaries
        const gridRect = grid.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();

        if (newLeft < gridRect.left) newLeft = gridRect.left;
        if (newTop < gridRect.top) newTop = gridRect.top;
        if (newLeft + imgRect.width > gridRect.right) newLeft = gridRect.right - imgRect.width;
        if (newTop + imgRect.height > gridRect.bottom) newTop = gridRect.bottom - imgRect.height;

        img.style.position = "absolute";
        img.style.zIndex = "1000";
        img.style.left = newLeft + "px";
        img.style.top = newTop + "px";
      };

      const stopMoveImage = () => {
        document.removeEventListener("mousemove", moveImage);
        document.removeEventListener("mouseup", stopMoveImage);
      };

      document.addEventListener("mousemove", moveImage);
      document.addEventListener("mouseup", stopMoveImage);
    });

    img.ondragstart = () => false; // Disable default drag events
  });
});
