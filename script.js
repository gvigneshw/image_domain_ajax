document.getElementById('fetchImageBtn').addEventListener('click', fetchImage);

function fetchImage() {
    // Step 1: Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Step 2: Configure it: GET-request for the URL /imageData.xml
    var url = "imageData.xml"; // Path to the XML file

    // Step 3: Open the connection
    xhr.open("GET", url, true);

    // Step 4: Set up the callback function
    xhr.onreadystatechange = function () {
        // Step 5: Check if the request is complete
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Parse the XML response
            var responseXML = xhr.responseXML;
            // Display the image
            displayImages(responseXML);
        }
    };

    // Step 6: Send the request
    xhr.send();
}

function displayImages(xml) {
    var images = xml.getElementsByTagName('image');
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ""; // Clear any previous content

    for (var i = 0; i < images.length; i++) {
        var url = images[i].getElementsByTagName('url')[0].textContent;
        var title = images[i].getElementsByTagName('title')[0].textContent;

        // Create an img element
        var img = document.createElement('img');
        img.src = url;
        img.alt = title;

        // Append the img element to the imageContainer div
        imageContainer.appendChild(img);
    }
}