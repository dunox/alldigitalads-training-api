import {
  Body,
  Controller,
  Get, Param, Post,
} from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }
  @Post(':id')
  changeCompleted(@Body() request, @Param() id) {
    return '{response:"done"}';
  }
}
