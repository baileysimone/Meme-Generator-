document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.getElementById("meme-form");
    const memeContainer = document.getElementById("meme-container");

    memeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const topText = document.getElementById("top-text").value;
        const bottomText = document.getElementById("bottom-text").value;
        const imageUrl = document.getElementById("image-url").value;

        
        if (!topText || !bottomText || !imageUrl) {
            alert("Please fill in all fields.");
            return;
        }

        const meme = createMeme(topText, bottomText, imageUrl);
        memeContainer.appendChild(meme);

        memeForm.reset();
    });

    memeContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-button")) {
            memeContainer.removeChild(e.target.parentElement);
        }
    });

    function createMeme(topText, bottomText, imageUrl) {
        const memeDiv = document.createElement("div");
        memeDiv.className = "meme";
        
        const topTextDiv = document.createElement("div");
        topTextDiv.innerText = topText;
        memeDiv.appendChild(topTextDiv);

        const memeImage = document.createElement("img");
        memeImage.src = imageUrl;
        memeDiv.appendChild(memeImage);

        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.innerText = bottomText;
        memeDiv.appendChild(bottomTextDiv);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-button";
        memeDiv.appendChild(deleteButton);

        return memeDiv;
    }
});
