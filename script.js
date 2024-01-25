/* IMAGE GALLERY */
const PHOTOS = [
    "https://coconutcreekfun.com/uploads/2022/08/night-golf-1200x823.webp",
    "https://www.elev8fun.com/hubfs/Imported_Blog_Media/Mini-Golf-Tips-1.jpeg",
    "https://i.ytimg.com/vi/__AK5CNuit0/maxresdefault.jpg",
  ];
  
  let index = 0;
  const imgElement = document.getElementById("img");
  imgElement.src = PHOTOS[index];
  
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  nextButton.addEventListener("click", () => {
    index += 1;
    prevButton.disabled = false;
    if (index === PHOTOS.length - 1) {
      // disable the button
      nextButton.disabled = true;
    }
    imgElement.src = PHOTOS[index];
  });
  
  function goToPrev() {
    index -= 1;
    nextButton.disabled = false;
    if (index === 0) {
      prevButton.disabled = true;
    }
    imgElement.src = PHOTOS[index];
  }
  
  prevButton.addEventListener("click", goToPrev);
  