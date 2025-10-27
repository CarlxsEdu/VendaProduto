document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DINÂMICO 1: Animação ao Rolar (Scroll) ---
    // Esta função observa os elementos e adiciona a classe 'is-visible' quando eles entram na tela.
    
    // Agora ele vai animar QUALQUER card com a classe '.feature-card' em QUALQUER página
    const cards = document.querySelectorAll('.feature-card');

    if (cards.length > 0) {
        const observerOptions = {
            root: null, // Observa em relação à viewport
            rootMargin: '0px',
            threshold: 0.1 // Ativa quando 10% do item estiver visível
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Para a observação após animar uma vez
                }
            });
        }, observerOptions);

        // Observa cada card
        cards.forEach(card => {
            observer.observe(card);
        });
    }


    // --- EFEITO DINÂMICO 2: Ação do Botão de Compra ---
    // Isso só vai funcionar na index.html, onde o botão existe
    
    const buyButton = document.getElementById('buy-button');
    
    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Iniciando processo de compra!');
            
            // **IMPORTANTE**: Aqui é onde você integraria seu gateway de pagamento.
            // Por exemplo, você poderia redirecionar para um link de checkout:
            // window.location.href = 'https://link-de-checkout-do-seu-produto.com';
            
            console.log('Botão de compra clicado.');
        });
    }

});