// script.js - Control de interacciones y métricas de llamadas para Rank & Rent
document.addEventListener('DOMContentLoaded', () => {
    const callButtons = document.querySelectorAll('a[href^="tel:"]');

    callButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Útil para conectar con eventos de Google Analytics o seguimiento de conversiones de leads
            console.log('Evento de conversión (Llamada iniciada) al número: ' + button.getAttribute('href'));
        });
    });

    console.log('Landing page de Grúas Panamá 24/7 cargada y lista para captar leads.');
});