document.addEventListener("DOMContentLoaded", function () {

    fetch("files/title.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Ошибка загрузки начального контента: ', error);
        });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href'); // Получаем атрибут href нажатой ссылки

            // Используем fetch API для загрузки контента
            fetch(href)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('content-container').innerHTML = html;
                })
                .catch(error => {
                    console.error('Ошибка загрузки контента: ', error);
                });
        });
    });
});