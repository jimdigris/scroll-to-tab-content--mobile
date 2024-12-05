/* - для моб версии. для табов. прокрутка к содержимому - start - */
/*
    1 - найти все табы (label) по классу
    2 - повесить обработчик по клику на каждый таб
    3 - при клике на таб, получить значение data атр = ид слоя с содержимым таба
    4 - прокрутить до слоя с содержимым
*/
(() => {
    class GoTabContent {
        static class_label = 'product__tab-label';                                                      // класс кнопки таба
        static data_name = 'data-tab-content';                                                          // для поиска ид содержимого таба

        static init() {
            this.tabs = this.get_tabs();                                                                // * 1 - получить все табы
            if (this.tabs.length > 0) {
                this.tabs.forEach((tab) => {
                    tab.addEventListener('click', () => { this.click_tab(tab); });                      // * 2 - нажатие на таб     
                });
            }
        }

        static get_tabs() { return Array.from(document.querySelectorAll(`.${this.class_label}`)); }     // ! получить все табы

        static click_tab(tab) {                                                                         // ! нажали на таб
            let id = tab.getAttribute(`${this.data_name}`);                                             //  * 3 - получить ид слоя с контентом
            setTimeout(() => {
                document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });                // прокрутить до него
            }, 300);
        }
    }

    if (document.documentElement.clientWidth < 576) { GoTabContent.init(); }                            // только для мобильных
})();
/* - для моб версии. для табов. прокрутка к содержимому - end - */