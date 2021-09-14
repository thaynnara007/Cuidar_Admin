/* eslint-disable no-dupe-keys */

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ChromePicker } from 'react-color';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';
import { createCategory } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';
import { HeaderButton } from '../styles/buttons.style';
import ChooseIconModal from '../modal/chooseIconModal';
import { DEFAULT_ICON } from '../../utils/constants';
import CardOption from '../cardOption';
import CategoryScreen from '../mobile/categoryPage';
import Loading from '../loading';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    margin: '25px 0px',
    color: '#112D4E',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
  },
  layoutBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
  },
  input: {
    marginBottom: '15px',
  },
  colorDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: '15px',
  },
  iconDiv: {
    width: '-moz-fit-content',
    width: 'fit-content',
    margin: '20px auto',
  },
});

function CreateActivity({ setPageState }) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [icon, setIcon] = useState(DEFAULT_ICON);
  const [color, setColor] = useState('#C6FFC1');
  const [textColor, setTextColor] = useState('#24267E');
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description;
    setDescriptionError(!validatedDescription);

    return validatedName && validatedDescription;
  };

  const handleCreateCategory = async () => {
    if (validateInfo()) {
      const body = {
        name,
        description,
        pageDescription,
        icon,
        color,
        textColor,
      };

      const result = await createCategory(body, setIsLoading);

      if (result) {
        toast.success('Categoria criada com sucesso');
        setPageState('list_categories');
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header buttonName="Registrar categoria" onClick={handleCreateCategory}>
            <IconButton color="inherit" onClick={() => setPageState('list_categories')}>
              <ArrowLeftIcon />
            </IconButton>
          </Header>
          <Container maxWidth="xl">
            <Typography className={classes.title} variant="h5">
              Prototipação da categoria
            </Typography>
            <Container maxWidth="xl" className={classes.box}>
              <div className={classes.formBox}>
                <FormTextField
                  label="Nome"
                  variant="outlined"
                  value={name}
                  error={nameError}
                  className={classes.input}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormTextField
                  label="descrição"
                  variant="outlined"
                  multiline
                  value={description}
                  error={descriptionError}
                  className={classes.input}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <FormTextField
                  label="descrição da página"
                  variant="outlined"
                  multiline
                  value={pageDescription}
                  className={classes.input}
                  onChange={(e) => setPageDescription(e.target.value)}
                />
                <div className={classes.colorDiv}>
                  <div>
                    <Typography variant="subtitle1" style={{ color: 'grey', marginLeft: '5px' }}>
                      Cor de fundo:
                    </Typography>
                    <ChromePicker
                      color={color}
                      onChangeComplete={(colorObj) => setColor(colorObj.hex)}
                    />
                  </div>
                  <div style={{ width: '15%' }} />
                  <div>
                    <Typography variant="subtitle1" style={{ color: 'grey', marginLeft: '5px' }}>
                      Cor do texto:
                    </Typography>
                    <ChromePicker
                      color={textColor}
                      onChangeComplete={(colorObj) => setTextColor(colorObj.hex)}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.layoutBox}>
                <div>
                  <CardOption icon={icon} name={name} description={description} />
                  <div className={classes.iconDiv}>
                    <HeaderButton onClick={() => setOpenModal(true)} style={{ margin: '0 auto' }}>
                      Escolher ícone
                    </HeaderButton>
                  </div>
                </div>
                <div style={{ width: '5%' }} />
                <CategoryScreen
                  title={name}
                  description={pageDescription}
                  color={color}
                  textColor={textColor}
                />
              </div>
            </Container>
            <ChooseIconModal
              open={openModal}
              handleClose={() => setOpenModal(false)}
              icon={icon}
              setIcon={setIcon}
            />
          </Container>
        </>
      )}
    </>
  );
}

export default CreateActivity;
