document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    const notificationElement = document.getElementById('notification');
    const favoritedEvents = JSON.parse(localStorage.getItem('favoritedEvents')) || [];

    favoriteButtons.forEach(button => {
        const eventElement = button.closest('.event');
        const eventTitle = eventElement.querySelector('h3').textContent;
        const eventDate = new Date(eventElement.getAttribute('data-event-date'));

        // Check if the event is already favorited
        if (favoritedEvents.some(event => event.title === eventTitle)) {
            button.textContent = 'Remover Favorito';
            button.classList.add('favorited');
        }

        button.addEventListener('click', () => {
            if (button.classList.contains('favorited')) {
                // Remove from favorites
                button.textContent = 'Favoritar';
                button.classList.remove('favorited');
                const index = favoritedEvents.findIndex(event => event.title === eventTitle);
                if (index > -1) {
                    favoritedEvents.splice(index, 1);
                    localStorage.setItem('favoritedEvents', JSON.stringify(favoritedEvents));
                }
            } else {
                // Add to favorites
                button.textContent = 'Remover Favorito';
                button.classList.add('favorited');
                favoritedEvents.push({ date: eventDate, title: eventTitle });
                localStorage.setItem('favoritedEvents', JSON.stringify(favoritedEvents));

                // Show favorited notification
                showNotification(`Você favoritou o evento: ${eventTitle}`);

                // Schedule notifications
                const now = new Date();
                const timeDifference48Hours = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

                setTimeout(() => {
                    showNotification(`Lembrete: ${eventTitle} ocorrerá em 48 horas!`);
                }, eventDate - now - timeDifference48Hours);

                setTimeout(() => {
                    showNotification(`Lembrete: ${eventTitle} é hoje!`);
                }, eventDate - now);
            }
        });
    });

    function showNotification(message) {
        notificationElement.textContent = message;
        notificationElement.classList.remove('hidden');
        setTimeout(() => {
            notificationElement.classList.add('hidden');
        }, 5000); // Hide notification after 5 seconds
    }

    // Check for notifications on page load
    const now = new Date();
    favoritedEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const timeDifference48Hours = 48 * 60 * 60 * 1000;
        console.log(eventDate)
        if (now >= eventDate - timeDifference48Hours && now < eventDate) {
            console.log("Vai")
            showNotification(`Lembrete: ${event.title} ocorrerá em 48 horas!`);
        } else if (now >= eventDate && now < eventDate + 24 * 60 * 60 * 1000) {
            console.log("Nao vai")
            showNotification(`Lembrete: ${event.title} é hoje!`);
        }
    });
});
