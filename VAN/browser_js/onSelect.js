let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let tags = document.querySelectorAll("*"); // add more tags
tags.forEach((tag) => {
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
    tag.addEventListener('select', (e) => {
        
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