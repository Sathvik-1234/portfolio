document.getElementById('action-btn').addEventListener('click', function () {
    const tagline = document.getElementById('tagline');
    tagline.innerText = "Git mastery in progress!";
    tagline.style.color = "green";
    console.log("Button clicked!");
});