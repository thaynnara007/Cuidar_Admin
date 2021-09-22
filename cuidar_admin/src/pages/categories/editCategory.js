/* eslint-disable no-dupe-keys */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ChromePicker } from 'react-color';
import { useHistory, useParams } from 'react-router';
import { useQuery } from 'react-query';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';
import Loading from '../../components/loading';
import Header from '../../components/header';
import ArrowLeftIcon from '../../components/icons/iconArrowLeft';
import { FormTextField } from '../../components/styles/inputs.style';
import CardOption from '../../components/cardOption';
import CategoryScreen from '../../components/mobile/categoryPage';
import { HeaderButton } from '../../components/styles/buttons.style';
import ChooseIconModal from '../../components/modal/chooseIconModal';
import { CREATE_ACTIVITY_PERMISSION, DEFAULT_ICON } from '../../utils/constants';
import Navbar from '../../components/navbar';
import { getCategory, updateCategory } from '../../api';
import { verifyPermission } from '../../utils/util';

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

function EditCategory() {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

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

  const hasPermission = verifyPermission(CREATE_ACTIVITY_PERMISSION);

  const { data: category, isFetching } = useQuery('get category', () => getCategory(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    setName(category?.data?.name ?? '');
    setDescription(category?.data?.description ?? '');
    setPageDescription(category?.data?.pageDescription ?? '');
    setIcon(category?.data?.icon ?? '');
    setColor(category?.data?.color ?? '#C6FFC1');
    setTextColor(category?.data?.textColor ?? '#24267E');
  }, [category]);

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description;
    setDescriptionError(!validatedDescription);

    return validatedName && validatedDescription;
  };

  const handleUpdate = async () => {
    if (validateInfo()) {
      const body = {
        name,
        description,
        pageDescription,
        icon,
        color,
        textColor,
      };

      const result = await updateCategory(body, id, setIsLoading);

      if (result) {
        toast.success('Categoria atualizada com sucesso');
        history.push('/categories');
      }
    }
  };

  return (
    <Navbar>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <>
          <Header hasButton={hasPermission} buttonName="Atualizar categoria" onClick={handleUpdate}>
            <IconButton color="inherit" onClick={() => history.push('/categories')}>
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
                  required
                  variant="outlined"
                  value={name}
                  error={nameError}
                  className={classes.input}
                  onChange={hasPermission ? (e) => setName(e.target.value) : () => {}}
                />
                <FormTextField
                  label="descrição"
                  required
                  variant="outlined"
                  multiline
                  value={description}
                  error={descriptionError}
                  className={classes.input}
                  onChange={hasPermission ? (e) => setDescription(e.target.value) : () => {}}
                />
                <FormTextField
                  label="descrição da página"
                  variant="outlined"
                  multiline
                  value={pageDescription}
                  className={classes.input}
                  onChange={hasPermission ? (e) => setPageDescription(e.target.value) : () => {}}
                />
                {hasPermission && (
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
                )}
              </div>
              <div className={classes.layoutBox}>
                <div>
                  <CardOption icon={icon} name={name} description={description} />
                  <div className={classes.iconDiv}>
                    {hasPermission && (
                      <HeaderButton onClick={() => setOpenModal(true)} style={{ margin: '0 auto' }}>
                        Escolher ícone
                      </HeaderButton>
                    )}
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
    </Navbar>
  );
}

export default EditCategory;
