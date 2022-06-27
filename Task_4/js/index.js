//About page
if (document.title == "About") {
  const eArray = document.getElementsByTagName("input");

  for (let e of eArray) {
    e.addEventListener("change", () => {
      console.log(`Value: ${e.value} ID: ${e.id}`);
    });
  }

  const submit = document.getElementsByClassName("aboutSubmitBtn")[0];
  submit.addEventListener("click", () => {
    console.log(`Text: ${submit.textContent} Class List: ${submit.classList}`);
  });
}

//Main page
else if (document.title == "Main") {
  const previousBtn = document.getElementsByClassName("previous-btn")[0];
  const nextBtn = document.getElementsByClassName("next-btn")[0];
  const imgArray = document.getElementsByClassName("big-image");
  let imageCount = 0;
  updatePhoto(0);

  function updatePhoto(index) {
    imageCount += index;
    for (let i = 0; i < imgArray.length; i++) {
      if (i === imageCount) {
        imgArray[i].style.display = "flex";
      } else {
        imgArray[i].style.display = "none";
      }
    }

    switch (imageCount) {
      case 0: {
        previousBtn.classList.add("disabled");
        previousBtn.style.visibility = "hidden";
        break;
      }
      case imgArray.length - 1:
        {
          nextBtn.classList.add("disabled");
          nextBtn.style.visibility = "hidden";
        }
        break;
      default: {
        previousBtn.classList.remove("disabled");
        previousBtn.style.visibility = "";
        nextBtn.classList.remove("disabled");
        nextBtn.style.visibility = "";
      }
    }
  }

  nextBtn.addEventListener("click", () => {
    updatePhoto(1);
  });

  previousBtn.addEventListener("click", () => {
    updatePhoto(-1);
  });

  const ImagesStock = [
    "https://media.discordapp.net/attachments/941582479117127680/990891102234107934/00259c8c-48a3-4408-9106-686da8b9deb3_jhonpatterson_a_unicorn_jumping_over_a_rainbow_realistic_photo.png?width=671&height=671",
  ];

  let i = 0;
  document
    .getElementsByClassName("sidebar-image")[0]
    .addEventListener("click", () => {
      document.getElementsByClassName("sidebar-image")[0].src = ImagesStock[i];
      i += 1;
    });
}
