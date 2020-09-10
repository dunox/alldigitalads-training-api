import {
  Body,
  Controller, Delete,
  Get, Param, Post, Put,
} from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';
import { Task } from "./entities/task.entity";
import { AddTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  getAll() {
    return this.taskManagerService.getAll();
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    const task = this.taskManagerService.findById(id);
    task.then(task => {
      task.isCompleted = updateTaskDto.isCompleted;
      this.taskManagerService.save(task);
    })
    return;
  }

  @Post()
  add(@Body() addTaskDto: AddTaskDto) {
    const newTask = new Task();
    newTask.title = addTaskDto.title;
    this.taskManagerService.add(newTask);
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.taskManagerService.remove(id);
    return;
  }
}
