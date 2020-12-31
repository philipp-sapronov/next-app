import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { Feedback } from './feedback.interface';
import { feedback } from './data';
import { Language } from '../common/types/Language';

type QueryParams = {
  ln: Language;
};

@Controller()
export class FeedbackController {
  @Get('/feedback')
  async getFeedback(@Query() query: QueryParams): Promise<Feedback[]> {
    try {
      const ln = query['ln']?.toUpperCase();
      const currentFeedback = feedback[ln];

      if (!currentFeedback) throw new BadRequestException('language');

      return currentFeedback;
    } catch (e) {
      throw e;
    }
  }
}
