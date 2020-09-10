import { Connection, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

export const taskProviders = [
  {
    provide: 'tasks_manager',
    useFactory: (connection: Connection) => connection.getRepository(Task),
    inject: ['DATABASE_CONNECTION'],
  },
];