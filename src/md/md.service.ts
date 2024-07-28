/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 20:31:50
 * @LastEditTime: 2024-07-28 22:43:21
 */
import { Injectable } from '@nestjs/common';
import { CreateMdDto } from './dto/create-md.dto';
import { UpdateMdDto } from './dto/update-md.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MdEntity } from './entities/md.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MdService {
  constructor(
    @InjectRepository(MdEntity)
    private mdRepository: Repository<MdEntity>,
  ) {}
  async create(createMdDto: CreateMdDto) {
    console.log(createMdDto);
    const qb = await this.mdRepository.save(createMdDto);
    console.log(qb);
    return qb;
  }
  findAll(): Promise<MdEntity[]> {
    return this.mdRepository.find();
  }

  findOne(id: number): Promise<MdEntity | null> {
    return this.mdRepository.findOneBy({ id });
  }

  update(id: number, updateMdDto: UpdateMdDto) {
    return `This action updates a #${id} md`;
  }

  remove(id: number) {
    return `This action removes a #${id} md`;
  }
}
