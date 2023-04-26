let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let allTags = document.querySelectorAll("*"); // add more allTags

let relTags = document.querySelectorAll("p, a, h1, h2, h3, h4, h5, h6");


relTags.forEach((tag) => {
    tag.addEventListener('focus', (e) => {
        msg.text = e.target.innerText;
        tag.style.backgroundColor = "yellow";
        speechSynthesis.speak(msg);
        
        let interval = setInterval(() => {
            if(!speechSynthesis.speaking){
                tag.style.removeProperty('background-color');
                clearInterval(interval);
            }
        }, 100);

        
    });
});