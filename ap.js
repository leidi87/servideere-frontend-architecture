$(document).ready(function() {
    // Escuchar el click en los botones de filtro
    $('.filter__btn').on('click', function() {
        const category = $(this).data('category');

        // Cambiar estado visual de los botones
        $('.filter__btn').removeClass('filter__btn--active');
        $(this).addClass('filter__btn--active');

        // Lógica de filtrado con animaciones
        if (category === 'all') {
            $('.js-card').fadeIn(400);
        } else {
            $('.js-card').hide(); // Oculta todos
            $(`.js-card[data-type="${category}"]`).fadeIn(400); // Muestra solo los seleccionados
        }
    });
});