import express from 'express';
import { Menu } from './models/menu';
import cors from 'cors';
import bodyParser from 'body-parser';


const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const empresasFavoritas: number[] = [];

server.get('/empresas', (_, res) => {
  res.send([
    { id: 1, cnpj: '111111' },
    { id: 2, cnpj: '222222' },
    { id: 3, cnpj: '333333' }
  ]);
});

server.get('/menus', (_, res) => {
  res.send([
    {
      descricao: 'Clientes',
      link: '/clientes'
    },
    {
      descricao: 'Exemplo Favoritas',
      link: '/pagina2'
    }
  ] as Menu[]);
});

server.post('/favoritas/:idEmpresa', (req, res) => {
  const idEmpresa = +req.params.idEmpresa;
  const favoritar = req.body.favoritar;
  if (favoritar) {
    if (!empresasFavoritas.includes(idEmpresa)) {
      empresasFavoritas.push(idEmpresa);
    }
  } else {
    const indiceEmpresa = empresasFavoritas.indexOf(idEmpresa);
    if (idEmpresa > -1) {
      empresasFavoritas.splice(indiceEmpresa, 1);
    }
  }
  res.send(empresasFavoritas);
});

server.get('/favoritas', (_, res) => {
  res.send(empresasFavoritas);
});

export default server;
