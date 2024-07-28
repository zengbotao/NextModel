/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 17:01:04
 * @LastEditTime: 2024-07-28 17:05:00
 */
import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  sendEmail() {
    this.emailService.sendEmail();
    return 'ok';
  }
}
