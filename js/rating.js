const ratings = document.querySelectorAll('.about__rating');

if (ratings.length > 0) {
    initRatings();
}

// Основная функция
function initRatings() {
    let ratingActive, ratingValue;

    // Бегаем по всем рейтингам на странице
    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);
    }

    // Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();
        
        if (rating.classList.contains('about__rating-set')) {
            setRating(rating);
        }
    }

    // Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.about__rating-active');
        ratingValue = rating.querySelector('.about__rating-value');
    }

    // Изменяем ширину активных звёзд
    function setRatingActiveWidth(i = ratingValue.innerHTML) {
        const ratingActiveWidth = i / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    // Возможность указать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.about__rating-item');
        for (let i = 0; i < ratingItems.length; i++) {
            const ratingItem = ratingItems[i];
            ratingItem.addEventListener('mouseenter', function () {
                // Обновление переменных
                initRatingVars(rating);
                // Обновление активных звёзд
                setRatingActiveWidth(ratingItem.value);
            });

            ratingItem.addEventListener('mouseleave', function () {
                setRatingActiveWidth();
            });

            ratingItem.addEventListener('click', function () {
                // Обновление переменных
                initRatingVars(rating);
                // Отобразить указанную оценку
                ratingValue.innerHTML = i + 1;
                setRatingActiveWidth();
            })
        }
    }
}