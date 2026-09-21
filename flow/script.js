function inundarPantalla() {

    const pantalla = document.getElementById("pantalla");

    for (let i = 0; i < 100; i++) {

        const bolita = document.createElement("img");

        bolita.src = "flower.webp";
        bolita.classList.add("bolita");

        // Tamaño aleatorio entre 20 y 100 píxeles
        const tamaño = Math.random() * 80 + 20;

        bolita.style.width = tamaño + "px";
        bolita.style.height = tamaño + "px";

        // Posición inicial aleatoria
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        // Velocidad aleatoria
        let velocidadX = (Math.random() - 0.5) * 5;
        let velocidadY = (Math.random() - 0.5) * 5;

        bolita.style.left = x + "px";
        bolita.style.top = y + "px";

        pantalla.appendChild(bolita);

        function mover() {

            x += velocidadX;
            y += velocidadY;

            // Rebote horizontal
            if (x <= 0 || x >= window.innerWidth - tamaño) {
                velocidadX *= -1;
            }

            // Rebote vertical
            if (y <= 0 || y >= window.innerHeight - tamaño) {
                velocidadY *= -1;
            }

            bolita.style.left = x + "px";
            bolita.style.top = y + "px";

            requestAnimationFrame(mover);
        }

        mover();
    }
}