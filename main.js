var countdownTimer = function (duration) {
    var remainingTime = duration;
    var updateTimer = function () {
        if (remainingTime <= 0) {
            console.log("Countdown complete!");
            clearInterval(interval);
            return;
        }
        var days = Math.floor(remainingTime / (24 * 60 * 60));
        var hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        var minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        var seconds = remainingTime % 60;
        console.log("Time remaining: ".concat(days, " days, ").concat(hours, " hours, ").concat(minutes, " minutes, ").concat(seconds, " seconds"));
        remainingTime--;
    };
    updateTimer(); // Initial call to display the timer immediately
    var interval = setInterval(updateTimer, 1000);
};
var durationInSeconds = 60; // Specify the duration in seconds
countdownTimer(durationInSeconds);
