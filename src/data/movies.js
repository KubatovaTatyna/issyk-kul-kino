import ayash2 from '../images/ayash2.png';
import avatar from '../images/avatar.jpg';
import baikush from '../images/baikush.jpg';

export const moviesData = [
    {
        movieName: 'АЯШ 2',
        description: 'Үй-бүлөөлүк комедиянын уландысы. Бул ирет Койчубековтордун үй-бүлөөсү Ош шаарында өтө турган Катянын атасынын 60-жылдык тоюна сапар алышат.  Адатка айлангандай эле өзүнүн кошуналарын Бакыт менен Каныкейди шерик кылып чогуу алып алышат. Кызыктуу окуялардын баары 60-жылдык тойдо баштала. Анткени Сапардын жана анын кайненесинин ортосунда болгон өзгөчө мамилелерине бул ирет Сапардын бажалары кошулат.',
        trailer: 'https://www.youtube.com/watch?v=Rix2ZCAYEtI',
        movieImage: ayash2,
        descriptionId: "1"
    },
    {
        movieName: 'Аватар 2',
        description: 'После принятия образа аватара солдат Джейк Салли становится предводителем народа на`ви и берет на себя миссию по защите новых друзей от корыстных бизнесменов с Земли. Теперь ему есть за кого бороться — с Джейком его прекрасная возлюбленная Нейтири. Когда на Пандору возвращаются до зубов вооруженные земляне, Джейк готов дать им отпор.',
        trailer: 'https://www.youtube.com/watch?v=6DR1SqPYWCo',
        movieImage: avatar,
        descriptionId: "2"
    },
    {
        movieName: 'БАЙКУШ',
        description: 'Үй-бүлөөлүк комедиянын уландысы. Бул ирет Койчубековтордун үй-бүлөөсү Ош шаарында өтө турган Катянын атасынын 60-жылдык тоюна сапар алышат.  Адатка айлангандай эле өзүнүн кошуналарын Бакыт менен Каныкейди шерик кылып чогуу алып алышат. Кызыктуу окуялардын баары 60-жылдык тойдо баштала. Анткени Сапардын жана анын кайненесинин ортосунда болгон өзгөчө мамилелерине бул ирет Сапардын бажалары кошулат.',
        trailer: 'https://www.youtube.com/watch?v=A25HSNAkHVU',
        movieImage: baikush,
        descriptionId: "3"
    },

]

export function getMovie(descriptionId) {
    return moviesData[
        moviesData.findIndex(movie => movie.descriptionId === descriptionId)
    ]
};
