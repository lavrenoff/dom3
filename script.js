window.addEventListener('load', () => {
    loadPhoto();
});

async function getPhoto() {
    // const apiKey = 'tmsaaEMJZ09GcSZFGXWR_6RKtfTKLT0-nUM_U1NM5Zc';
    const apiKey = 'BqccJsrfTmovmsaZAxmNYEOVUJZqOrOvHS0CDpNqO20';


    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка загрузки фотографии:', error);
        return {};
    }
}

async function loadPhoto() {
    const photo = await getPhoto();
    if (photo) {
        const imageBox = document.querySelector('.container__box');
        const img = document.createElement('img');

        // img.classList.add('container__img');

        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        imageBox.insertAdjacentElement('afterbegin', img);


        const imageName = document.querySelector('.container__name');
        imageName.textContent = `${photo.user.name}`;

        const imageLikes = document.querySelector(`.container__likes`);
        imageLikes.textContent = `${photo.likes}`;
    }
}

function incrementLikes() {
    const likesCount = document.querySelector('.container__likes');
    const currentCount = parseInt(likesCount.textContent, 10);
    likesCount.textContent = currentCount + 1;
}

const btnlikes = document.querySelector('.btn');
btnlikes.addEventListener('click', () => {
    incrementLikes();
});

