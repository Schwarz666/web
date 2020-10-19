ymaps.ready(init);
var map, bgtuPlacemark;

function init(){ 
    map = new ymaps.Map("map", {
        center: [53.304696, 34.304016],
        zoom: 17
    });
    
    bgtu1_Placemark = new ymaps.Placemark([53.305464, 34.305740], {
        hintContent: 'БГТУ',
        balloonContent: 'Брянский Государственный Технический Университет - Корпус №1'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    bgtu2_Placemark = new ymaps.Placemark([53.304696, 34.304016], {
        hintContent: 'БГТУ',
        balloonContent: 'Брянский Государственный Технический Университет - Корпус №2'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    bgtu3_Placemark = new ymaps.Placemark([53.305050,34.306615], {
        hintContent: 'БГТУ',
        balloonContent: 'Брянский Государственный Технический Университет - Корпус №3'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

   

    bgituPlacemark = new ymaps.Placemark([53.249302, 34.342517], {
        hintContent: 'БГИТУ',
        balloonContent: 'Брянский Государственный Инженерно-Технологический Университет'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    bgitu_Placemark = new ymaps.Placemark([53.244235, 34.365635], {
        hintContent: 'БГИТУ',
        balloonContent: 'Брянский Государственный Инженерно-Технологический Университет - Корпус №2А'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    bguPlacemark = new ymaps.Placemark([53.272624, 34.351484], {
        hintContent: 'БГУ им.И.Г.Петровского',
        balloonContent: 'Брянский государственный университет имени академика И. Г. Петровского'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    upravPlacemark = new ymaps.Placemark([53.248422, 34.328274], {
        hintContent: 'Управление и бизнес',
        balloonContent: 'Брянский институт управления и бизнеса'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/vuz.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    reuPlacemark = new ymaps.Placemark([53.229187, 34.331587], {
        hintContent: 'Российский экономический университет имени Г. В. Плеханова Корпус №2',
        balloonContent: 'Российский экономический университет имени Г. В. Плеханова - Брянский филиал'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/filial.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });
    reu_Placemark = new ymaps.Placemark([53.270596, 34.354327], {
        hintContent: 'Российский экономический университет имени Г. В. Плеханова',
        balloonContent: 'Российский экономический университет имени Г. В. Плеханова - Брянский филиал'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/filial.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    miitPlacemark = new ymaps.Placemark([53.204341, 34.416945], {
        hintContent: 'МИИТ',
        balloonContent: 'филиал федерального государственного бюджетного образовательного учреждения высшего образования Петербургский государственный университет путей сообщения Императора Александра I» в г.Брянске'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/filial.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    ranhigPlacemark = new ymaps.Placemark([53.243396, 34.369840], {
        hintContent: 'РАНХиГС',
        balloonContent: 'Брянский филиал Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/filial.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    chaPlacemark = new ymaps.Placemark([53.258365, 34.379829], {
        hintContent: 'Академия бизнеса',
        balloonContent: 'Брянский филиал Международной академии бизнеса и управления'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/filial.svg',
        iconImageSize: [23, 23],
        iconImageOffset: [0, 0]
    });

    
    map.geoObjects.add(bgtu1_Placemark);
    map.geoObjects.add(bgtu2_Placemark);
    map.geoObjects.add(bgtu3_Placemark);
  
   
    map.geoObjects.add(bgituPlacemark);
    map.geoObjects.add(bgitu_Placemark);

    map.geoObjects.add(bguPlacemark);
    map.geoObjects.add(upravPlacemark);

    map.geoObjects.add(reuPlacemark);
    map.geoObjects.add(reu_Placemark);

    map.geoObjects.add(miitPlacemark);
    map.geoObjects.add(ranhigPlacemark);
    map.geoObjects.add(chaPlacemark);
}
