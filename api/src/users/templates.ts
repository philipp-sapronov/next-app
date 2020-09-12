import { ApplicationStatus } from './enums';
import { IUser } from './interface';
import * as moment from 'moment-timezone';

export const emailTemplateGreetingRU = (params: IUser): string => `Здравствуйте, ${params.name}! 

Меня зовут Света и я создатель онлайн-школы «In English, please» 🔔

Спасибо за Вашу заявку! 🙌🏻 

В ближайшее время мы с Вами свяжемся по этому номеру ${params.phone}, чтобы выбрать удобное время для пробного занятия 👌🏻

А вот мой номер на тот случай, если у Вас появятся вопросы +38 (066) 008 21 54 

До связи 📱
Отличного дня ☀️
`;

export const emailTemplateGreetingUK = (params: IUser): string => `Вітаю, ${params.name}! 

Мене звати Світлана і я засновник онлайн школи «In English, please» 🔔

Дякуємо за Вашу заяку! 🙌🏻 

Найближчим часом ми з Вами зв'яжемося за вказаним Вами номером телефону ${params.phone}, щоб вибрати зручний час для пробного заняття 👌🏻

А це мій номер на виподак, якщо у Вас з'являться питання +38 (066) 008 21 54 

До зустрічі 📱
Гарного дня ☀️
`;

export const emailTemplateApplication = (params: IUser): string => {
  return `<pre>🚀  <b>Заявка*</b>

👩  Name: ${params.name}

☎️  Phone: ${params.phone}

✉️  Email: ${params.email}

📅  ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
</pre>
`;
};

export const emailTemplateCallRequest = (params: { phone: string }): string => {
  return `<pre>🚀  <b>Звонок</b>

☎️  Phone: ${params.phone}

📅  ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
</pre>
`;
};

export const telegramTemplateApplication = (params: IUser): string => {
  return `
🚀  *Заявка*

👩  Name: ${params.name}

☎️  Phone: ${params.phone}

✉️  Email: ${params.email}

🌟  Status: ${ApplicationStatus.active}

📅  ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
`;
};

export const telegramTemplateCallRequest = (params: { phone: string }): string => {
  return `
🚀  *Звонок*

☎️  Phone: ${params.phone}

🌟  Status: ${ApplicationStatus.active}

📅  ${moment.tz(new Date(), 'Europe/Kiev').format('MMMM DD, YYYY HH:mm')}
`;
};
