const start = document.querySelector('#start');
const stopBtn = document.querySelector('#stop'); 
const display_box = document.querySelector('#display');
const history_box = document.querySelector('#history-box'); 

let intervalId;

const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
};

const updateDisplayAndHistory = () => {
    const newOtp = generateOTP();
    
    // 1. Update the main display with spaces between digits
    display_box.textContent = newOtp.split('').join(' ');

    // 2. Create and add the new history item (OTP only)
    const historyItem = document.createElement('div');
    historyItem.classList.add('py-1', 'border-b', 'border-white/10', 'truncate'); 
    historyItem.textContent = newOtp;
    
    // Insert new item at the top of the history box
    history_box.prepend(historyItem);
};

start.addEventListener('click', () => {
    clearInterval(intervalId);

    // Clear history box and set initial message
    history_box.innerHTML = '';
    display_box.textContent = 'Generating OTPs...';
    
    // Generate the first OTP immediately after the message
    setTimeout(() => {
        updateDisplayAndHistory();

        // Set the new interval
        intervalId = setInterval(updateDisplayAndHistory, 1000);
    }, 100); 
    
    console.log("Generating OTPs...");
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    // Set the stop message
    display_box.textContent = 'Generation Stopped';
    
    console.log("OTP Generation Stopped");
});