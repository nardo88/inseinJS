import phoneNumbers from './modules/phoneNumbers';
import popups from './modules/popups';
import maskForPhones from './modules/maskForPhones';
import prompts from './modules/prompts';

// отображение доп. телефона
phoneNumbers();
// отображение меню и остальных popup
popups();
// маска для телефона
maskForPhones();
// отображение подсказок при наведении на кружки с цифрами
prompts();