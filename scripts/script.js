document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;

    const grupos = document.querySelectorAll('.reviews-container-grupo');
    const totalGrupos = grupos.length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const containerGrupos = document.getElementById('reviews-grupos');

    // Função para atualizar o carrossel
    function updateCarousel() {
        // Oculta todos os grupos e remove a classe 'active'
        grupos.forEach(grupo => {
            grupo.classList.remove('active');
        });

        // Torna visível o grupo no índice atual e move o carrossel
        grupos[currentIndex].classList.add('active');
        containerGrupos.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Evento para o botão anterior
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalGrupos - 1; // Volta para o último grupo
        }
        updateCarousel();
    });

    // Evento para o botão próximo
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalGrupos - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o primeiro grupo
        }
        updateCarousel();
    });

    // Inicializa o carrossel ao carregar a página
    updateCarousel();
});
