import { Divider, Link, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import Navbar from '../../components/navbar';

const useStyles = makeStyles({
  textMargin: {
    margin: '10px 40px',
  },
  index: {
    fontSize: '15px',
  },
  title: {
    color: '#112D4E',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <Navbar>
      <Paper style={{ fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"' }}>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          Bem Vindo(a) ao Cuidar Admin
        </Typography>
        <br />
        <Typography variant="subtitle1" className={classes.textMargin}>
          O cuidar Admin é o sistema de administração do aplicativo Cuidar, aqui você poderá
          cadastrar os pacientes e ter acesso ao histórico de atividades do mesmo, como também
          cadastrar as atividades, as etapas necessárias para conclui-la, o casdastro de categorias
          onde colocar as atividades e por último o cadastro de outros usuários, dando a eles acesso
          ao Cuidar Admin.
        </Typography>
        <div className={`${classes.textMargin} ${classes.index}`}>
          <ul>
            <li>
              <Link href="#patient">Pacientes</Link>
              <ul>
                <li>
                  <Link href="#patient-create">Criar paciente</Link>
                </li>
                <li>
                  <Link href="#patient-remove">Remover paciente</Link>
                </li>
                <li>
                  <Link href="#patient-info">Informações paciente</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#category">Categorias</Link>
              <ul>
                <li>
                  <Link href="#category-create">Criar categoria</Link>
                </li>
                <li>
                  <Link href="#category-remove">Remover categoria</Link>
                </li>
                <li>
                  <Link href="#category-edit">Atualizar da categoria</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#activity">Atividades</Link>
              <ul>
                <li>
                  <Link href="#activity-create">Criar atividade</Link>
                </li>
                <li>
                  <Link href="#activity-remove">Remover atividade</Link>
                </li>
                <li>
                  <Link href="#activity-edit">Atualizar atividade</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#step">Etapas</Link>
              <ul>
                <li>
                  <Link href="#step-create">Criar etapa</Link>
                </li>
                <li>
                  <Link href="#step-remove">Remover etapa</Link>
                </li>
                <li>
                  <Link href="#step-edit">Atualizar etapa</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#user">Usuários</Link>
              <ul>
                <li>
                  <Link href="#user-create">Criar usuário</Link>
                </li>
                <li>
                  <Link href="#user-remove">Remover usuário</Link>
                </li>
                <li>
                  <Link href="#user-edit">Atualizando suas informações</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="patient" className={`${classes.textMargin} ${classes.title}`}>
          <Divider />
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Pacientes
          </Typography>
          <Divider />
          <Typography variant="h6" id="patient-create">
            Criar paciente
          </Typography>
          <Typography variant="h6" id="patient-remove">
            Remover paciente
          </Typography>
          <Typography variant="h6" id="patient-info">
            Informações do paciente
          </Typography>
          <Divider />
        </div>
        <div id="category" className={`${classes.textMargin} ${classes.title}`}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Categorias
          </Typography>
          <Divider />
          <Typography variant="h6" id="category-create">
            Criar categoria
          </Typography>
          <Typography variant="h6" id="category-remove">
            Remover categoria
          </Typography>
          <Typography variant="h6" id="category-edit">
            Atualizar categoria
          </Typography>
          <Divider />
        </div>
        <div id="activity" className={`${classes.textMargin} ${classes.title}`}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Atividades
          </Typography>
          <Divider />
          <Typography variant="h6" id="activity-create">
            Criar atividade
          </Typography>
          <Typography variant="h6" id="activity-remove">
            Remover atividade
          </Typography>
          <Typography variant="h6" id="activity-edit">
            Atualizar atividade
          </Typography>
          <Divider />
        </div>
        <div id="step" className={`${classes.textMargin} ${classes.title}`}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Etapas
          </Typography>
          <Divider />
          <Typography variant="h6" id="step-create">
            Criar etapa
          </Typography>
          <Typography variant="h6" id="step-remove">
            Remover etapa
          </Typography>
          <Typography variant="h6" id="step-edit">
            Atualizar etapa
          </Typography>
          <Divider />
        </div>
        <div id="user" className={`${classes.textMargin} ${classes.title}`}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Usuários
          </Typography>
          <Divider />
          <Typography variant="h6" id="user-create">
            Criar usuário
          </Typography>
          <Typography variant="h6" id="user-remove">
            Remover usuário
          </Typography>
          <Typography variant="h6" id="user-edit">
            Atualizar usuário
          </Typography>
          <Divider />
        </div>
      </Paper>
    </Navbar>
  );
}

export default Home;
