document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Define the grid item sizes
    const sizes = ['standard-pin', 'square-pin', 'long-pin'];

    // Select the grid container
    const gridContainer = document.getElementById('gridContainer');

    // Add the pins (example images, replace these URLs with real ones)
    const images = [
        "./assets/images/dog.jpg",          // Standard Pin
        "./assets/images/beach.jpg",    // Square Pin
        "./assets/images/pumpkin.png",      // Long Pin
        "./assets/images/Eiffel tower.jpg",          // Standard Pin
        "./assets/images/girl.webp",  // Square Pin
        "./assets/images/ng_visa_online.jpg",         // Long Pin
        "./assets/images/man.jpeg",          // Standard Pin
        "./assets/images/wall.jpg",    // Square Pin
        "./assets/images/city_lights.jpg",      // Long Pin
        "./assets/images/Queen_Elizabeth_II.jpg", // Standard Pin
        "./assets/images/ktm.jpg",  // Square Pin
        "./assets/images/tree.jpg",         // Long Pin
        "./assets/images/beach_sunset.jpg",      // Long Pin
        "./assets/images/color_smoke.jpg", // Standard Pin
        "./assets/images/dreamy-clouds.jpg",  // Square Pin
        "./assets/images/gt_grandtour.jpg",         // Long Pin
        // Add more images if needed...
    ];

    // Function to shuffle and assign sizes to grid items, avoiding repetition
    function shufflePins(images) {
        let previousSize = null;

        images.forEach((imageSrc, index) => {
            // Ensure the current size is different from the previous one
            let randomSize;
            do {
                randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            } while (randomSize === previousSize);

            // Create a new grid item element
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item', randomSize);

            // Create an image element inside the grid item
            const img = document.createElement('img');
            img.src = imageSrc;

            // Append the image to the grid item and the item to the grid container
            gridItem.appendChild(img);
            gridContainer.appendChild(gridItem);

            // Update the previous size to prevent the same size from repeating side by side
            previousSize = randomSize;
        });
    }

    // Call the function to populate the grid with shuffled sizes
    shufflePins(images);
});
