import talash from '../images/movies/talash1.jpg';
import razboi from '../images/movies/razboi.jpg';
import bey from '../images/movies/bey.jpg';
import jez from '../images/movies/jez1.jpg';
import kot from '../images/movies/kot.jpg';
import ayash2 from '../images/movies/ayash2.png';
import buyursa from '../images/movies/buyursa1.png';
import boshetunmai1 from '../images/movies/boshetunmai1.png';
import polchan from '../images/movies/polchan.jpg';

export const moviesData = [
    {
        movieName: 'Талаш',
        description: 'Строителям не выплатят зарплату за проделанную работу, и они решают ограбить дом. После ограбления они узнают что к ним в машину подсела дочка хозяина. При этом папаша-богатей собирается отобрать свое чадо иным путем. Но захочет ли дочка вернуться к папе?',
        trailer: "https://www.youtube.com/embed/bygjrgIoaPo",
        movieImage: talash,
        descriptionId: 'talash'
    },
    {
        movieName: 'Разбой',
        description: ' Основан на реальных событиях. В городе происходит ряд дерзких разбойных нападений, чтобы их поймать оперативная группа милиционеров работают днём и ночью не покладая рук, но почему-то всегда оказываются на шаг позади. Почему?',
        trailer: "https://www.youtube.com/embed/kfITjZR8fdM",
        movieImage: razboi,
        descriptionId: "razboi"
    },
    {
        movieName: 'БААРЫ ЭРКЕКТЕР ҮЧҮН',
        description: 'Трое женатых парней едут к другу на свадьбу. Первый мужчина тиран в отношении своей жены, не дает ей развиваться, мыслит стереотипно. Второй - полная противоположность первого, в его семье жена правит всеми делами, а третий только что развелся, холостяк. По дороге в Ош они обсуждают женщин и свои семейные проблемы. Стендап стиль с элементами представления (юмористические скетчи).',
        trailer: "https://www.youtube.com/embed/vCvqLrELJKU",
        movieImage: bey,
        descriptionId: "baaryerkekteruchun"
    },
    {
        movieName: 'ЖЕЗ',
        description: "Самые любимые персонажи из популярного скетчкома «ЭЛ ЭМНЕ ДЕЙТ?» теперь на больших экранах. Увлекательная история хитроумного акима, Бердигула, со своим помощником Сашкой, никого не оставят равнодушными. После позорной потери своего места, в местном самоуправлении, наши герои уж очень хотят реабилитироваться в глазах сельчан, для которых они никто, кроме как посмешища.Непреодолимая любовь к власти заставляет наших героев броситься на попытки вернуть себе свое тепленькое место в администрации села «Жети-Булак», очернив действующую власть. Но все ли так просто, как думают они",
        trailer: "https://www.youtube.com/embed/uKqsorhcZbs",
        movieImage: jez,
        descriptionId: "jez"
    },
    {
        movieName: 'BOSHETUNMAI ',
        description: "Четыре истории с разными героями. Общее только одно: boshetunmai.",
        trailer: "https://www.youtube.com/embed/W1Wfg9hoONs",
        movieImage: boshetunmai1,
        descriptionId: "boshetunmai"
    },
    {
        movieName: 'АЯШ 2',
        description: "Продолжение доброй семейной комедии. На этот раз, семья Койчубековых отправляется в город Ош на юбилей отца Кати и уже по устоявшейся традиции берут с собой своих соседей Бакыта и Каныкей. Всё самое интересное начинается на юбилее. Ведь вдобавок к «особым» отношениям Сапара со своей тёщей в Ош приезжают ещё и его бажарики.",
        trailer: "https://www.youtube.com/embed/Rix2ZCAYEtI",
        movieImage: ayash2,
        descriptionId: "ayash2"
    },
    {
        movieName: 'КОТ В САПОГАХ: ПОСЛЕДНЕЕ ЖЕЛАНИЕ',
        description: "Всеми любимый дерзкий, бесстрашный и такой умилительный кот возвращается!Обаятельный разбойник в сапогах в компании очаровательной Кисы Мягколапки и болтливого пса Перро отправляется в величайшее путешествие, чтобы найти мифическую Звезду Желаний и проверить, действительно ли у котов всего 9 жизней… или есть варианты?",
        trailer: "https://www.youtube.com/embed/JA8Xw0ffel8",
        movieImage: kot,
        descriptionId: "kotvsapogah"
    },
    {
        movieName: 'БУЮРСА',
        description: "Депутат городского кенеша Бакаев Адилет проживает жизнь недобросовестного и коррумпированного чиновника, дает окружающим обещания, не выполняя их, пока не понимает, что один из его «обычных» дней повторяется        ",
        trailer: "https://www.youtube.com/embed/nEyTUy2tP8g",
        movieImage: buyursa,
        descriptionId: "buyursa"
    },
    {
        movieName: 'ПОЛЧАН',
        description: "У кандидата в депутаты Сапара Асанова возникают большие проблемы. Журналисты выясняют, что он никогда нигде не служил, хотя везде указывал обратное и говорил что имеет военный билет. Новость быстро становится резонансной и общество начинает требовать, чтобы Сапарова забрали в армию. Понимая что он оказался в безвыходной ситуации, Сапаров соглашается отслужить. Но только прием в армии для него оказывается не таким теплым как он ожидал.",
        trailer: "https://www.youtube.com/embed/I66CBYPFSvI",
        movieImage: polchan,
        descriptionId: "polchan"
    },

]

export function getMovie(descriptionId) {
    return moviesData[
        moviesData.findIndex(movie => movie.descriptionId === descriptionId)
    ]
};
