import {
  Injectable,
  ArgumentMetadata,
  PipeTransform,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {validate, ValidationError} from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ClassValidationPipe implements PipeTransform {
  async transform(value: unknown, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new HttpException(
        `Validation failed: ${this.formatErrors(errors)}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }

  private formatErrors(errors: ValidationError[]) {
    return errors.map((err) => Object.values(err.constraints)).join(', ');
  }
}
