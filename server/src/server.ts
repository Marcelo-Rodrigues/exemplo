import express from 'express';
import { Menu } from './models/menu';
import cors from 'cors';

const server = express();
server.use(cors());

server.get('/menus', (_, res) => {
  res.send([
    {
      descricao: 'Clientes',
      link: '/clientes'
    },
    {
      descricao: 'Menu 2',
      link: '/pagina2'
    },
  ] as Menu[]);
});

export default server;
