import { getTime } from '../../common/helpers/date-time';
import { RequestCall } from '../interfaces/request-call.interface';
import { Application } from '../interfaces/application.interface';
import { StatusText } from '../enums/status-text.enum';

const requestCall = (params: RequestCall): string => {
  return `
🚀  *Звонок*

☎️  Phone: ${params.phone}

🌟  Status: ${StatusText.active}

📅  ${getTime()}
`;
};

const application = (params: Application): string => {
  return `
🚀  *Заявка*

👩  Name: ${params.name}

☎️  Phone: ${params.phone}

✉️  Email: ${params.email}

🌟  Status: ${StatusText.active}

📅  ${getTime()}
`;
};

export const TelegramMessage = {
  requestCall,
  application,
};

export const CallbackMessage = {
  setHasBeenRead: {
    text: 'Отметить как прочитанно',
    data: 'setHasBeenRead',
  },
};
