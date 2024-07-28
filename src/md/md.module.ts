import { Module } from '@nestjs/common';
import { MdService } from './md.service';
import { MdController } from './md.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdEntity } from './entities/md.entity';
@Module({
  controllers: [MdController],
  providers: [MdService],
  imports: [TypeOrmModule.forFeature([MdEntity])],
})
export class MdModule {}
