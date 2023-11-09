const main = document.querySelector('#main');
const headerElement = document.querySelector('header');

let userClicksButton = () => {
    //Create the button
    let userButton = document.createElement('button');
    userButton.textContent = `Click Me!`;
    headerElement.append(userButton);

    //When the button is clicked
    //Fetch a new QR code from the API
    //Create the QR code within the Main element
    let createQrCodeOnMain = () => {
        let outPutOnMain = document.createElement('div');
    
         outPutOnMain.innerHTML =`
         <h4>Hello World!</h4>
         `;
         
         main.append(outPutOnMain);
    };
    
    createQrCodeOnMain ();

};
userClicksButton();