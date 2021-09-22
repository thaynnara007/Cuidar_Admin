import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  Divider,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';

import ActivityIcon from '../../components/icons/iconActivity';
import AngleDownIcon from '../../components/icons/iconAngleDown';
import BabyIcon from '../../components/icons/iconBaby';
import TrashIcon from '../../components/icons/iconTrash';
import Navbar from '../../components/navbar';
import { AccordionButton, HeaderButton } from '../../components/styles/buttons.style';

const useStyles = makeStyles({
  textMargin: {
    margin: '10px 40px',
  },
  index: {
    fontSize: '15px',
  },
  title: {
    color: '#112D4E',
    textAlign: 'center',
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    fontSize: '15px',
    flexBasis: '25%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '15px',
    color: '#7F7C82',
    flexShrink: 0,
    flexBasis: '25%',
  },
});

function Home() {
  const classes = useStyles();

  const generatePacientAccordion = () => (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        expandIcon={<AngleDownIcon size="1x" color="#7F7C82" />}
      >
        <Typography className={classes.heading}>Nico Robin</Typography>
        <Typography className={classes.secondaryHeading}>088.122.189-10</Typography>
        <Typography className={classes.secondaryHeading}>nico_robin@gmai.com</Typography>
        <Typography className={classes.secondaryHeading}>987880737</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionActions>
        <AccordionButton>Detalhes</AccordionButton>
        <IconButton color="inherit">
          <TrashIcon size="1x" color="#BD4B4B" />
        </IconButton>
      </AccordionActions>
    </Accordion>
  );

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
                  <Link href="#patient-info">Informações paciente</Link>
                </li>
                <li>
                  <Link href="#patient-remove">Remover paciente</Link>
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
        <div id="patient" className={`${classes.textMargin}`}>
          <Divider />
          <Typography variant="h4" className={classes.title}>
            Pacientes
          </Typography>
          <Divider />
          <div className={classes.textMargin}>
            <Typography variant="body1">
              Os pacientes são as crianças cuja as cuidadoras terão acesso ao aplicativo Cuidar,
              assim o progresso do tratamento em âmbito domiciliar será registrado a cada atividade
              concluida.
            </Typography>
            <div className={classes.textDiv}>
              <Typography variant="body1" style={{ marginRight: '16px' }}>
                A aba de pacientes pode ser acessada a partir do menu lateral, clicando no ícone:
              </Typography>
              <BabyIcon />
            </div>
          </div>
          <br />
          <Typography variant="h6" id="patient-create">
            Criar paciente
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">Para cadastrar um paciente, clique no botão</Typography>
              <HeaderButton>Novo Paciente</HeaderButton>
              <Typography>na aba de pacientes, preencha o formulário e clique em </Typography>
              <HeaderButton>Registrar paciente</HeaderButton>
            </div>
            <Typography variant="body1">
              Agora o paciente pode acessar o aplicativo Cuidar em seu celular, usando o email
              cadastrado e a senha é o CPF cadastrado. Uma vez que o paciente acesse o aplicativo, o
              mesmo pode mudar a senha quando desejar, porém orientá-lo a mudar no primeiro acesso.
            </Typography>
          </div>
          <br />
          <Typography variant="h6" id="patient-info">
            Informações do paciente
          </Typography>
          <div className={classes.textMargin}>
            <Typography variant="body1">
              Na aba de pacientes, temos uma lista dos pacientes no seguinte formato, onde a
              primeira coluna corresponde ao nome completo do paciente, a segunda coluna ao CPF, a
              terceira coluna ao e-mail e por fim a quarta coluna ao número de telefone:
            </Typography>
            <br />
            {generatePacientAccordion()}
            <br />
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Clicando no paciente, é possível ver mais informações sobre o mesmo, clicando no
                botão
              </Typography>
              <AccordionButton>DETALHES</AccordionButton>
            </div>
            <Typography variant="body1">
              Na aba de DADOS PESSOAIS tem as informações relativas ao cadastro, sendo que esses
              dados podem ser alterados a qualquer momento pelo paciente via aplicativo Cuidar.
            </Typography>
            <Typography variant="body1">
              Já na aba de HISTÓRICO tem as informações relativas à realização das atividades,
              constando quais atividades e em quais horários as mesmas foram concluídas pelo
              paciente, estruturadas na forma de um calendário.
            </Typography>
          </div>
          <br />
          <Typography variant="h6" id="patient-remove">
            Remover paciente
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">Para remover um paciente, basta clicar em</Typography>
              <IconButton color="inherit">
                <TrashIcon size="1x" color="#BD4B4B" />
              </IconButton>
              <Typography variant="body1"> e confirmar.</Typography>
            </div>
          </div>
          <br />
          <Divider />
        </div>
        <div id="category" className={`${classes.textMargin}`}>
          <Typography variant="h4" className={classes.title}>
            Categorias
          </Typography>
          <Divider />
          <div className={classes.textMargin}>
            <Typography variant="body1">
              As categorias são usadas para classificar uma série de atividades. Sendo assim, as
              atividades relacionadas à alimentação, por exemplo, estão dentro da categoria
              Refeições.
            </Typography>
            <div className={classes.textDiv}>
              <Typography variant="body1" style={{ marginRight: '16px' }}>
                A aba de categorias pode ser acessada a partir do menu lateral, clicando no ícone:
              </Typography>
              <ActivityIcon />
            </div>
          </div>
          <br />
          <Typography variant="h6" id="category-create">
            Criar categoria
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">Para cadastrar uma categoria, clique no botão</Typography>
              <HeaderButton>Nova categoria</HeaderButton>
              <Typography>
                na aba de categorias, preencha os campos, escolha as cores e um ícone.
              </Typography>
            </div>
            <div className={classes.textDiv}>
              <Typography>
                Do lado direito é mostrado uma prévia aproximada de como a tela da categoria sendo
                criada ficará no aplicativo móvel. Para concluir a criação da categoria basta clicar
                em
              </Typography>
              <HeaderButton>Registrar categoria</HeaderButton>
            </div>
          </div>
          <br />
          <Typography variant="h6" id="category-remove">
            Remover categoria
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">Para remover uma categoria, basta clicar em</Typography>
              <IconButton color="inherit">
                <TrashIcon size="1x" color="#BD4B4B" />
              </IconButton>
              <Typography variant="body1"> e confirmar.</Typography>
            </div>
          </div>
          <br />
          <Typography variant="h6" id="category-edit">
            Atualizar categoria
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Na aba de categorias, clicando no categoria desejada e então no botão
              </Typography>
              <AccordionButton>DETALHES</AccordionButton>
              <Typography variant="body1">
                é possível ver as informações relativas a de criação da categoria, incluindo a
                prévia da tela.
              </Typography>
            </div>
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Aqui é possível editar os campos preenchidos, escolher novas cores e escolher um
                novo ícone. Para concluir com as atualizações basta clicar em
              </Typography>
              <HeaderButton>Atualizar categoria</HeaderButton>
            </div>
          </div>
          <br />
          <Divider />
        </div>
        <div id="activity" className={`${classes.textMargin}`}>
          <Typography variant="h4" className={classes.title}>
            Atividades
          </Typography>
          <Divider />
          <div className={classes.textMargin}>
            <Typography variant="body1">
              As atividades são tarefas a serem realizadas pelas cuidadoras junto à criança com
              microcefalia, com intuito de dar continuidade ao tratamento em âmbito domiciliar.
            </Typography>
            <br />
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Para acessar as atividades de uma categoria, primeiro vá para aba de categorias,
                escolha uma categoria e clique em
              </Typography>
              <HeaderButton>Ver atividades</HeaderButton>
            </div>
          </div>
          <br />
          <Typography variant="h6" id="activity-create">
            Criar atividade
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Para cadastrar uma nova atividade, clique no botão
              </Typography>
              <HeaderButton>Nova atividade</HeaderButton>
              <Typography>preencha os campos e escolha um ícone.</Typography>
            </div>
            <div className={classes.textDiv}>
              <Typography>
                Do lado direito é mostrado uma prévia aproximada de como a tela da atividade sendo
                criada ficará no aplicativo móvel. Para concluir a criação da atividade basta clicar
                em
              </Typography>
              <HeaderButton>Registrar atividade</HeaderButton>
            </div>
          </div>
          <br />
          <Typography variant="h6" id="activity-remove">
            Remover atividade
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Para remover basta clicar na atividade e em seguida no botão
              </Typography>
              <IconButton color="inherit">
                <TrashIcon size="1x" color="#BD4B4B" />
              </IconButton>
              <Typography variant="body1"> e por fim confirmar.</Typography>
            </div>
          </div>
          <br />
          <Typography variant="h6" id="activity-edit">
            Atualizar atividade
          </Typography>
          <div className={classes.textMargin}>
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Clicando no categoria desejada e então no botão
              </Typography>
              <AccordionButton>DETALHES</AccordionButton>
              <Typography variant="body1">
                é possível ver as informações relativas a de criação da atividade, incluindo a
                prévia da tela.
              </Typography>
            </div>
            <div className={classes.textDiv}>
              <Typography variant="body1">
                Aqui é possível editar os campos preenchidos e escolher um novo ícone. Para concluir
                com as atualizações basta clicar em
              </Typography>
              <HeaderButton>Atualizar atividade</HeaderButton>
            </div>
          </div>
          <br />
          <Divider />
        </div>
        <div id="step" className={`${classes.textMargin}`}>
          <Typography variant="h4" className={classes.title}>
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
        <div id="user" className={`${classes.textMargin}`}>
          <Typography variant="h4" className={classes.title}>
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
