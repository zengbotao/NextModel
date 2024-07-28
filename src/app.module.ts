/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 09:48:04
 * @LastEditTime: 2024-07-28 22:31:49
 */
import { Module } from '@nestjs/common';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdModule } from './md/md.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'tbl_md',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,//
    }),
    UserModule,
    MdModule,
  ],
  controllers: [AppController],
  providers: [AppService], // 处理业务逻辑  各个模块之间可以共享
  exports: [],
})
export class AppModule {}
