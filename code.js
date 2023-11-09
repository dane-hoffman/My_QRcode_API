// Select the 'main' element and the 'header' element from the HTML document
const main = document.querySelector('#main');
const headerElement = document.querySelector('header');

// Create a button element
let button = document.createElement('button');
button.textContent = 'Click Me!'; // Set the button text
headerElement.append(button); // Append the button to the header

// Add a click event listener to the button
button.addEventListener('click', async () => {
    try {
        // Generate a random number between 1 and 100 and set it as qrCodeData
        const qrCodeData = Math.floor(Math.random() * 100) + 1;
        
        // Construct the URL for a QR code with the random number as data
        const url = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${qrCodeData}`;
        
        // Create an image element with the QR code as its source
        const imgElement = document.createElement('img');
        imgElement.src = url;

        // Create a QR code display within the 'main' element
        let createQrCodeOnMain = () => {
            let outPutOnMain = document.createElement('div');
            
            // Set the content of the 'h4' element to display the QR code data
            outPutOnMain.innerHTML = `<h4>QR Code Data: ${qrCodeData}</h4>`;
            
            // Clear the existing content of the 'main' element
            main.innerHTML = '';
            
            // Append the QR code image and the new content to the 'main' element
            outPutOnMain.appendChild(imgElement);
            main.appendChild(outPutOnMain);
        };

        // Call the createQrCodeOnMain function to update the content in the 'main' element
        createQrCodeOnMain();
    } catch (error) {
        console.error('Error:', error);
    }
});
