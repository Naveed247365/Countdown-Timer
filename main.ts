#! usr/bin/env node

const countdownTimer = (duration: number) => {
    
    let remainingTime = duration;

    const updateTimer = () => {
        if (remainingTime <= 0) {
            console.log("Countdown complete!");
            clearInterval(interval);
            return;
        }

        const days = Math.floor(remainingTime / (24 * 60 * 60));
        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        const seconds = remainingTime % 60;

        console.log(`Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

        remainingTime--;
    };

    updateTimer(); // Initial call to display the timer immediately
    const interval = setInterval(updateTimer, 1000);
};

const durationInSeconds = 60; // Specify the duration in seconds
countdownTimer(durationInSeconds);