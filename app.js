function preguntarAlConejo(textoUsuario) {
    // Esto envía el texto al sistema operativo del R1
    window.parent.postMessage({
        type: 'rabbit_intent',
        action: 'ask_ai',
        payload: {
            prompt: textoUsuario
        }
    }, '*');
}

preguntarAlConejo("Hola rabit que tal estas");


window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'rabbit_response') {
        const respuestaIA = event.data.payload.text;

        // Aquí actualizas tu HTML con lo que dijo la IA
        document.getElementById('result').innerText = respuestaIA;

        console.log("El conejo dice: " + respuestaIA);
    }
});