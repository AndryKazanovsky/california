function map(){
    ymaps.ready(init);

    var myMap,
        bigMap = false;

    function init () {
        myMap = new ymaps.Map('contacts__map', {
            center: [50.440741, 30.509949],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl']
        }, {
            // При сложных перестроениях можно выставить автоматическое
            // обновление карты при изменении размеров контейнера.
            // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
            autoFitToViewport: 'always',
            searchControlProvider: 'yandex#search'
        });

        myMap.geoObjects
            .add(new ymaps.Placemark([50.440741, 30.509949], {
                balloonContent: '<b>California in Ukraine </b><br /> Lva Tolstogo st. 12, Кyiv, Ukraine'
            }, {
                preset: 'islands#icon',
                iconColor: '#9e1a36'
            }))
    }
}