import { Controller, Get, Post, Req, Put, Delete, UseGuards, Res } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request, Response } from 'express'
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }
    @UseGuards(AuthGuard('jwt'))
    @Get('/:page')
    findAllAdmin(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.findAllAdmin(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAllUser(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.findAllUser(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/takeEditBook/:id')
    findOne(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.findOne(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    updatBook(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.updatBook(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    deleteBook(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.deleteBook(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('sort/:title/:page')
    sortBooks(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.sortBooks(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('search/:title')
    searchBooks(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.searchBooks(req, res);
    } 

    @UseGuards(AuthGuard('jwt'))
    @Post()
    addBook(@Req() req: Request, @Res() res: Response): any {
        return this.booksService.addBook(req, res);
    }
}
