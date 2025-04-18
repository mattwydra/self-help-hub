document.getElementById("load-image").addEventListener("click", async () => {
  const loadingElement = document.getElementById("loading");
  const errorElement = document.getElementById("error");
  const container = document.getElementById("image-container");

  // Show loading indicator and clear previous results
  loadingElement.style.display = "block";
  errorElement.textContent = "";
  container.innerHTML = "";

  try {

    // Define repository details
    const owner = "gymney"; // Replace with the owner of the repo
    const repo = "hopecore"; // Replace with the repository name
    const path = "someone-will-look-at-you-like-this/IMG_1047.PNG"; // Path to the image in the repo

    // GitHub API URL for getting the content
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Fetch image metadata from GitHub API
    const response = await fetch(apiUrl, {
      headers: {
        // Add a personal access token if needed for private repos
        // "Authorization": "token YOUR_GITHUB_TOKEN"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    // GitHub API returns the content as base64 encoded
    if (data.content && data.encoding === "base64") {
      // Decode the base64 content
      const imageBlob = base64ToBlob(data.content, "image/png");
      const imageUrl = URL.createObjectURL(imageBlob);

      // Create and display the image
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.alt = "GitHub Image";
      imageElement.style.maxWidth = "100%";

      // Show the quote
      document.getElementById("quote").hidden = false;

      // Add the image to the container
      container.appendChild(imageElement);
    } else {
      throw new Error("Image data not found or not in expected format");
    }
  } catch (error) {
    errorElement.textContent = `Error loading image: ${error.message}`;
    console.error("Error loading image:", error);
  } finally {
    loadingElement.style.display = "none";
  }
});

// Helper function to convert base64 to Blob
function base64ToBlob(base64, mimeType) {
  const byteString = atob(base64.replace(/\s/g, ''));
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeType });
}