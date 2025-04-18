window.onload = function() {
    document.getElementById("donation-button").addEventListener("click", function() {
        alert("🎉 Thank you for your donation! You're making a difference!");

        // creates a confetti effect that displays once user adds their donation info
        const confetti = document.createElement("div");
        confetti.innerText = "God Bless You!";
        confetti.style.position = "fixed";
        confetti.style.top = "50%";
        confetti.style.left = "50%";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    });
};