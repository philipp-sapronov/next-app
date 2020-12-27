import { getTime } from '../../common/helpers/date-time';
import { Application } from '../interfaces/application.interface';
import { RequestCall } from '../interfaces/request-call.interface';

const clientGreetingEmail_ru = (params: Application): string => `
Здравствуйте, ${params.name}! 

Спасибо за Вашу заявку! 🔔

В ближайшее время мы с Вами свяжемся по этому номеру ${params.phone}, 
чтобы выбрать удобное время для пробного занятия 👌🏻

До связи 📱
Отличного дня ☀️
`;

const clientGreetingEmail_uk = (params: Application): string => `
Вітаю, ${params.name}! 

Дякуємо за Вашу заяку! 🔔

Найближчим часом ми з Вами зв'яжемося за вказаним Вами номером телефону ${params.phone}, 
щоб вибрати зручний час для пробного заняття 👌🏻

До зустрічі 📱
Гарного дня ☀️
`;

const applicationEmail = (params: Application): string => {
  return `<pre>🚀  <b>Заявка</b>

👩  Name: ${params.name}

☎️  Phone: ${params.phone}

✉️  Email: ${params.email}

📅  ${getTime()}
</pre>
`;
};

const callRequestEmail = (params: RequestCall): string => {
  return `<pre>🚀  <b>Звонок</b>

☎️  Phone: ${params.phone}

📅  ${getTime()}
</pre>
`;
};

export const SystemEmail = {
  application: { subject: 'Новая заявка на первый урок', template: applicationEmail },
  requestCall: { subject: 'Новый заявка на обратный звонок', template: callRequestEmail },
};

export const ClientGreetingEmail = {
  UK: { subject: 'Заявка на урок англійської мови', template: clientGreetingEmail_uk },
  RU: { subject: 'Заявка на урок английского языка', template: clientGreetingEmail_ru },
};
