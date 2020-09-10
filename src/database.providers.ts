// import { createConnection } from 'typeorm';
//
// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async () => await createConnection({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'Zin230928',
//       database: 'tasks_manager',
//       entities: [
//         __dirname + '/../**/*.entity{.ts,.js}',
//       ],
//       synchronize: true,
//     }),
//   },
// ];