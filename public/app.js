/* document.addEventListener('DOMContentLoaded', () => {
    const imageListContainer = document.getElementById('imageList');

    // Fetch the list of images from the server
    fetch('/api/images/list')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch image list');
            }
            return response.json();
        })
        .then(data => {
            // Create image elements and append them to the container
            data.images.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'Thumbnail Image';
                imageListContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching image list:', error);
        });
}); */
