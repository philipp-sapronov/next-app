import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { Course, SaleOption } from './course.interface';
import { courses, saleOptions } from './data';
import { Language } from '../common/types/Language';

type QueryParams = {
  ln: Language;
};

@Controller()
export class CourseController {
  @Get('/courses')
  async getCourses(@Query() query: QueryParams): Promise<Course[]> {
    try {
      const ln = query['ln']?.toUpperCase();
      const currentCourses = courses[ln];

      if (!currentCourses) throw new BadRequestException('language');

      return currentCourses;
    } catch (e) {
      throw e;
    }
  }

  @Get('/sale-options')
  async getSaleOptions(@Query() query: QueryParams): Promise<SaleOption[]> {
    try {
      const ln = query['ln']?.toUpperCase();
      const currentSaleOptions = saleOptions[ln];

      if (!currentSaleOptions) throw new BadRequestException('Language expected');

      return currentSaleOptions;
    } catch (e) {
      throw new Error(e);
    }
  }
}
