/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 09:48:04
 * @LastEditTime: 2024-07-28 20:32:56
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
