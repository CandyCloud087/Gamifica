let cartasAtuais = [];

        function carregarDeck(arquivo) {
            fetch(arquivo)
                .then(response => response.text())
                .then(data => {
                    cartasAtuais = data.trim().split('\n');
                    document.getElementById('carta').textContent = "Deck carregado: " + arquivo;
                })
                .catch(error => {
                    alert("Erro ao carregar o deck: " + error);
                });
        }

        function girarCarta() {
            if (cartasAtuais.length > 0) {
                const carta = cartasAtuais[Math.floor(Math.random() * cartasAtuais.length)];
                document.getElementById('carta').textContent = carta;
            } else {
                alert("Nenhuma carta disponível no deck atual.");
            }
        }

        function embaralharCartas() {
            cartasAtuais = cartasAtuais.sort(() => Math.random() - 0.5);
            alert("Cartas embaralhadas!");
        }

        function encerrar() {
            window.close();  // Funciona apenas se a janela foi aberta via JavaScript
        }