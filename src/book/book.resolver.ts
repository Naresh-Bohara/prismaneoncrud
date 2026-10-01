import { Resolver } from '@nestjs/graphql';
import { Book } from './model/book.model';

@Resolver(() => Book)
export class BookResolver {}
