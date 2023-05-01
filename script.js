let texto = document.querySelector('#texto')
let voice = document.querySelector('#voice')
let bt = document.querySelector('#bt')
let selecionaVoz = 14

window.speechSynthesis.addEventListener('voiceschanged', () => {
    let listaDeVozes = window.speechSynthesis.getVoices();
    let optionLT = document.createElement('option')
    optionLT.setAttribute('value', 1)
    optionLT.innerText = listaDeVozes[14].name
    voice.appendChild(optionLT)
    
})

bt.addEventListener('click', () => {
    if (texto.value !== '') {
        let vozSelecionada = window.speechSynthesis.getVoices();
        let textoAudio = new SpeechSynthesisUtterance(texto.value)
        textoAudio.voice = vozSelecionada[selecionaVoz]
        window.speechSynthesis.speak(textoAudio)
    }
}) 

function atualizaStatus() {
    if(window.speechSynthesis.speaking){
        voice.setAttribute('disabled', 'disabled')
        bt.setAttribute('disabled', 'disabled')
    } else {
        voice.removeAttribute('disabled')
        bt.removeAttribute('disabled')
    }
}

setInterval(atualizaStatus, 100)