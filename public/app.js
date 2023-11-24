const showPicturesBtn = document.querySelector(".pictures-btn");
const closeBtn = document.querySelector(".close-btn");
const picturesContainer = document.querySelector(".pictures");
const picturesPlaceholder = document.querySelector(".pictures-placeholder")

// Show already processed pictures by clicking the Show Pictures button
// Show close button as well
showPicturesBtn.addEventListener("click", async function () {
    if (!closeBtn.classList.contains("show-link")) {
        closeBtn.classList.add("show-link");
        await displayPictures();
    }
});

// Hide close button
// Hide Pictures
closeBtn.addEventListener("click", function () {
    closeBtn.classList.remove("show-link");
    hidePictures();
});

// Get list of images in the folder
async function fetchFilenames() {
    const response = await fetch('/api/images/list');
    const filenames = await response.json();
    return filenames;
}

// Create html content dynamically and show pictures in folder
async function displayPictures() {
    const filenames = await fetchFilenames();

    if (filenames.length === 0) {
        console.log("No images available.");
        picturesPlaceholder.classList.add("show-message");
        return;
    }


    picturesPlaceholder.classList.remove("show-message");

    picturesContainer.innerHTML = "";

    for (const filename of filenames) {
        const imgElement = document.createElement("img");
        imgElement.src = `../assets/thumb/${filename}.jpg`;
        imgElement.alt = "Picture";
        picturesContainer.appendChild(imgElement);
    }
}

function hidePictures() {
    picturesContainer.innerHTML = '';
    picturesPlaceholder.classList.remove("show-message");
}
