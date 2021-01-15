'use strict'

import phoneNumbers from './modules/phoneNumbers';
import popups from './modules/popups';
import maskForPhones from './modules/maskForPhones';
import prompts from './modules/prompts';
import typesOfRepair from './modules/typesOfRepair';
import portfolio from './modules/portfolio';
import portfolioModal from './modules/portfolioModal';
import documents from './modules/documents';
import documentPopup from './modules/documentPopup';
import acardeon from './modules/acardeon';
import problems from './modules/problems';
import designSolutions from './modules/designSolutions';
import consultation from './modules/consultation';
import reviews from './modules/reviews';

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
// документы
documents();
// popup documents 
documentPopup();
//акардеон
acardeon();
// блок с проблемами
problems();
// блок с дизайнерскими решениями
designSolutions();
// popupt с консультацией
consultation();
// слайдер с отзывами
reviews();
