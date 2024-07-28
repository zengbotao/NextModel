/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 20:31:50
 * @LastEditTime: 2024-07-28 21:56:03
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MdService } from './md.service';
import { CreateMdDto } from './dto/create-md.dto';
import { UpdateMdDto } from './dto/update-md.dto';

@Controller('md')
export class MdController {
  constructor(private readonly mdService: MdService) {}

  @Post('/upload')
  create(@Body() createMdDto: CreateMdDto) {
    return this.mdService.create(createMdDto);
  }

  @Get('/all')
  findAll() {
    return this.mdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMdDto: UpdateMdDto) {
    return this.mdService.update(+id, updateMdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mdService.remove(+id);
  }
}
