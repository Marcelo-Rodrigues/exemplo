import express from 'express';
import { Menu } from './models/menu';
const server = express();

server.get('/', (_, res) => {
  res.send([
    {
      descricao: 'Menu 1',
      link: '/menu1'
    },
    {
      descricao: 'Menu 2',
      link: '/menu2'
    },
  ] as Menu[]);
});

export default server;
