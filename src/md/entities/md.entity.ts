/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-07-28 20:31:50
 * @LastEditTime: 2024-07-28 23:02:16
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('tbl_md')
export class MdEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  scan: string;

  @Column()
  name: string;

  @Column()
  label: string;

  @Column()
  description: string;

  @Column()
  text: string;

  @Column({ nullable: true, default: 'default value' }) //非空，参数必须传
  title: string;

  @Column({ default: 'default value' })
  time: string;
}
