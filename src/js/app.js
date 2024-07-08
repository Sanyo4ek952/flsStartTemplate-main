/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
// flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();
/* Форматирование чисел */
// import './libs/wNumb.min.js';

/*
Модуль работы со спойлерами
Документация: https://start-template.ru/modul-spojlery-chertogi-frilansera-v3-0-0/
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль "Табы"
Документация: https://start-template.ru/modul-taby-chertogi-frilansera-v3-0-0/
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "Показать еще"
Документация: https://start-template.ru/modul-pokazat-eshhe-chertogi-frilansera-v3-0-0/
Сниппет (HTML): showmore
*/
flsFunctions.showMore();

/*
Модуль "До/После"
Документация: https://start-template.ru/modul-do-posle/
Сниппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ripple Effect"
Документация: https://start-template.ru/modul-ripple-effect-chertogi-frilansera-v3-0-0/
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомный курсор"
Документация: https://start-template.ru/modul-custom-cursor-chertogi-frilansera-v3-0-0/
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Бегущая строка" (Alpha)
Документация:
Сниппет (HTML):
*/
// import './libs/keywords.js'

/*
Модуль "Попапы"
Документация: https://start-template.ru/modul-popup-vytekayushhie-modalnye-okna-chertogi-frilansera-v3-0-0/
Сниппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль анимации (параллакс) объектов во время движения мыши
Документация: https://start-template.ru/modul-animaczii-parallaks-obektov-vo-vremya-dvizheniya-myshi-chertogi-frilansera-v3-0-0/
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа c формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы */
/* Документация: https://start-template.ru/rabota-s-formami-i-elementami-form-chertogi-frilansera-v3-0-0/ */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Отправка формы */
/* Документация: https://start-template.ru/rabota-s-formami-i-elementami-form-chertogi-frilansera-v3-0-0/ */
// flsForms.formSubmit();

/* Модуль формы"количество" */
/* Документация: https://start-template.ru/modul-formy-kolichestvo-chertogi-frilansera-v3-0-0/ */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* Модуль работы с календарем */
// import './files/forms/datepicker.js'

/* (В работе) модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле  js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле  js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для HTML тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://start-template.ru/modul-slajdera-swiper-chertogi-frilansera-v3-0-0/
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://start-template.ru/modul-lenivaya-podgruzka-lazy-loading-chertogi-frilansera-v3-0-0/
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель объектов с атрибутом data-watch
// Документация: https://start-template.ru/modul-nablyudatel-po-poyavleniyu-elementov-pri-prokrutke-straniczy-skrolle-chertogi-frilansera-v3-0-0/
// Сниппет(HTML):
// import './libs/watcher.js'

// / / Модуль по экранной прокрутке
// Документация: https://start-template.ru/modul-ekrannoj-prokrutki-straniczy-fullpage-chertogi-frilansera-v3-0-0/
// Сниппет(HTML):
// import './libs/fullpage.js'

// Модуль параллакса
// Документация: https://start-template.ru/parallaks-effekt-pri-skrolle-straniczy-chertogi-frilansera-v3-0-0/
// Сниппет(HTML):
// import './libs/parallax.js'

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// Документация: https://start-template.ru/modul-prokrutka-k-nuzhnomu-bloku-plavnaya-navigacziya-po-stranicze-chertogi-frilansera-v3-0-0/
// flsScroll.pageNavigation();

// Функциональность добавления классов в хеддер при прокрутке
// Документация: https://start-template.ru/modul-dobavleniya-klassov-v-shapku-pri-prokrutke-straniczy-chertogi-frilansera-v3-0-0/
// flsScroll.headerScroll();

// Модуль анимация цифрового счетчика
// Документация: https://start-template.ru/modul-animaczii-czifrovogo-schetchika/
// Сниппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонри сетка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
Документация плагина:  https://start-template.ru/modul-isotope-masonri-setka-chertogi-frilansera-v3-0-0/
Сниппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Другие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптивный */
// Документация: https://start-template.ru/modul-dinamicheskij-adaptiv-chertogi-frilansera-v3-0-0/
import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Другое ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================
