function generateQRCode() {
    const inputText = document.getElementById("inputText").value || "https://github.com/Kwazi-code"; // Default to your GitHub link
    const qrCodeDiv = document.getElementById("qrCode");
  
    // Clear previous QR code
    qrCodeDiv.innerHTML = "";
  
    // Check if the input field is empty and show an alert
    if (!inputText) {
      alert("Please enter some text or URL");
      return;
    }
  
    // Create a new QRCode instance using the input text
    const qrCode = new QRCode(qrCodeDiv, {
      text: inputText,
      width: 200,
      height: 200
    });
  }
  