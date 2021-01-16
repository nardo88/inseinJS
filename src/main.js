'use strict'

import phoneNumbers from './modules/phoneNumbers';
import popups from './modules/popups';
import maskForPhones from './modules/maskForPhones';
import prompts from './modules/prompts';
import typesOfRepair from './modules/typesOfRepair';
import portfolio from './modules/portfolio';
import documents from './modules/documents';
import documentPopup from './modules/documentPopup';
import acardeon from './modules/acardeon';
import problems from './modules/problems';
import designSolutions from './modules/designSolutions';
import consultation from './modules/consultation';
import reviews from './modules/reviews';
import howWeWork from './modules/howWeWork';
import ourPartners from './modules/ourPartners';
import sendForms from './modules/sendForms';
import serviceList from './modules/serviceList';

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
// блок как мы работаем (табы)
howWeWork();
// карусель с партнерами
ourPartners();
// отправка форм
sendForms();
// получение списка услуг
serviceList();
