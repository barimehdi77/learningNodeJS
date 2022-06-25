import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor (private prisma: PrismaService) {}

  create(data: Prisma.BooksCreateInput) {
    return this.prisma.books.create({
      data,
    });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: {
        Author: {
          select: {
            name: true,
          }
        }
      }
    });
  }

  findOne(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({
      where,
      include: {
        Author: {
          select: {
            name: true,
          }
        }
      }
    });
  }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
    return this.prisma.books.update({
      data,
      where,
     })
    };

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where,
    });
  }
}
