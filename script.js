function scrollReviews(direction) {
    const wrapper = document.querySelector('.reviews-wrapper');
    const scrollAmount = 320; // Adjust based on card width

    wrapper.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}


function sendEmail(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    var data = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

    var emailTo = "aksharpathshalaofficial@gmail.com"; // Replace with Akshar Pathshala email
    var subject = "New Contact Form Submission";
    var message = "Name: " + data[0] + "\nEmail: " + data[1] + "\nMessage: " + data[2];

    MailApp.sendEmail(emailTo, subject, message);
}

const follower = document.querySelector('.follower');

// Update follower position on mousemove
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Directly position the follower at the cursor position
    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
});
