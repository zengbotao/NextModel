import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  sendEmail() {
    let url = `http://example.com/confirm?token=`;

    this.mailerService.sendMail({
      to: 'waves1997@163.com', // 接收信息的邮箱
      from: '2898487084@qq.com', // 要发送邮件的邮箱
      subject: 'Love You √', //邮件猪蹄
      // html: '<b>welcome !</b>',
      template: 'email', //模板文件名
      context: {
        // The context data that will be passed to the template
        name: 'User', //模板的自变量
        url,
      },
    });
  }
}
