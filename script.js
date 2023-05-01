let texto = document.querySelector('#texto')
let voz = document.querySelector('#vcs')
let bt = document.querySelector('#bt')

window.speechSynthesis.addEventListener('voiceschanged', () => {
    let voicesList = window.speechSynthesis.getVoices();
    console.log(voicesList)
})

bt.addEventListener('click', () => {
    if(texto.value !== '') {
        let textoAudio = new SpeechSynthesisUtterance(texto.value)
        console.log(texto.value)
        window.SpeechSynthesis.speak(textoAudio)
        console.log("Clicou")
    }
}) 