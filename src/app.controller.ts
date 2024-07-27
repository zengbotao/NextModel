import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//负责处理传入请求并向客户端返回响应
// 控制器的目的是接收应用程序的特定请求。
// 路由机制控制哪个控制器接收哪些请求。
// 通常，每个控制器都有多个路由，并且不同的路由可以执行不同的操作。
// 为了创建基本控制器，我们使用类和装饰器。
// 装饰器将类与所需的元数据关联起来，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。


@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //@Get() HTTP 请求方法装饰器告诉 Nest 为 HTTP 请求的特定端点创建处理程序。端点对应于 HTTP 请求方法（在本例中为 GET）和路由路径。
  getHello(): string {
    return this.appService.getHello();
  }
}
