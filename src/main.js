import phoneNumbers from './modules/phoneNumbers';
import popups from './modules/popups';
import maskForPhones from './modules/maskForPhones';
import prompts from './modules/prompts';
import typesOfRepair from './modules/typesOfRepair';
import portfolio from './modules/portfolio';
import portfolioModal from './modules/portfolioModal';

// отображение доп. телефона
phoneNumbers();
// отображение меню и остальных popup
popups();
// маска для телефона
maskForPhones();
// отображение подсказок при наведении на кружки с цифрами
prompts();
// виды ремонта
typesOfRepair();
// портфолио
portfolio();
// модалка portfolio
portfolioModal();