import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { Task } from './entities/task.entity';

@Injectable()
export class TaskManagerService {

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  getAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findById(id): Promise<Task> {
    return this.tasksRepository.findOneOrFail({ id });
  }

  save(task: Task) {
    this.tasksRepository.save(task);
  }

  add(task: Task) {
    this.tasksRepository.insert(task);
  }

  remove(id: number) {
    this.tasksRepository.delete(id);
  }
}