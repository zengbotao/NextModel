/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 09:48:04
 * @LastEditTime: 2024-07-28 18:07:52
 */
import { Module } from '@nestjs/common';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailModule } from './modules/email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
console.log(path);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'liwen',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    EmailModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.qq.com', // Gmail SMTP 服务器地址
          port: 465, // SMTP 端口
          secure: true, // 使用 SSL/TLS
          auth: {
            user: '2898487084@qq.com', // 你的 Gmail 邮箱
            pass: 'dgdfgfd', // 你的 Gmail 密码或应用专用密码，在QQ邮箱账户那里配置
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
        defaults: {
          from: '2898487084@qq.com',
        },
        template: {
          // dir: process.cwd() + '/src/template/', // 这一句不用配置，可以找到路径
          dir: path.join(__dirname, './template'), //选择模板的目录
          adapter: new PugAdapter(), //这里可以选择不同的模板
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService], // 处理业务逻辑  各个模块之间可以共享
  exports: [],
})
export class AppModule {}
