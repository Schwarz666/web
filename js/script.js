ymaps.ready(init);
var map, bgtuPlacemark;

function init() {
    map = new ymaps.Map("map", {
        center: [53.304696, 34.304016],
        zoom: 17
    });
    var resources = [
        {
            coor: [53.305464, 34.305740],
            hint: {
                hintContent: 'БГТУ',
                balloonContent: 'Брянский Государственный Технический Университет - Корпус №1'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.304696, 34.304016],
            hint: {
                hintContent: 'БГТУ',
                balloonContent: 'Брянский Государственный Технический Университет - Корпус №2'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.305050, 34.306615],
            hint: {
                hintContent: 'БГТУ',
                balloonContent: 'Брянский Государственный Технический Университет - Корпус №3'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.249302, 34.342517],
            hint: {
                hintContent: 'БГИТУ',
                balloonContent: 'Брянский Государственный Инженерно-Технологический Университет'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.244235, 34.365635],
            hint: {
                hintContent: 'БГИТУ',
                balloonContent: 'Брянский Государственный Инженерно-Технологический Университет - Корпус №2А'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }

        },

        {
            coor: [53.272624, 34.351484],
            hint: {
                hintContent: 'БГУ им.И.Г.Петровского',
                balloonContent: 'Брянский государственный университет имени академика И. Г. Петровского'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },
        {
            coor: [53.248422, 34.328274],
            hint: {
                hintContent: 'Управление и бизнес',
                balloonContent: 'Брянский институт управления и бизнеса'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/vuz.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.229187, 34.331587],
            hint: {
                hintContent: 'Российский экономический университет имени Г. В. Плеханова Корпус №2',
                balloonContent: 'Российский экономический университет имени Г. В. Плеханова - Брянский филиал'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/filial.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },
        {
            coor: [53.270596, 34.354327],
            hint: {
                hintContent: 'Российский экономический университет имени Г. В. Плеханова',
                balloonContent: 'Российский экономический университет имени Г. В. Плеханова - Брянский филиал'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/filial.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.204341, 34.416945],
            hint: {
                hintContent: 'МИИТ',
                balloonContent: 'Филиал федерального государственного бюджетного образовательного учреждения высшего образования Петербургский государственный университет путей сообщения Императора Александра I» в г.Брянске'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/filial.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.243396, 34.369840],
            hint: {
                hintContent: 'РАНХиГС',
                balloonContent: 'Брянский филиал Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/filial.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        },

        {
            coor: [53.258365, 34.379829],
            hint: {
                hintContent: 'Академия бизнеса',
                balloonContent: 'Брянский филиал Международной академии бизнеса и управления'
            },
            image: {
                iconLayout: 'default#image',
                iconImageHref: 'images/filial.svg',
                iconImageSize: [23, 23],
                iconImageOffset: [0, 0]
            }
        }
    ]

    for (let i = 0; i < resources.length; i++) {
        const university = resources[i];
        tempPlacemark = new ymaps.Placemark(university.coor, university.hint, university.image);
        map.geoObjects.add(tempPlacemark);
    };

}
