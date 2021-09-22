/* eslint-disable no-dupe-keys */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import { useQuery } from 'react-query';
import { CREATE_ACTIVITY_PERMISSION, DEFAULT_ICON } from '../../utils/constants';
import Loading from '../../components/loading';
import Header from '../../components/header';
import ArrowLeftIcon from '../../components/icons/iconArrowLeft';
import { FormTextField } from '../../components/styles/inputs.style';
import CardOption from '../../components/cardOption';
import { HeaderButton } from '../../components/styles/buttons.style';
import ActivityScreen from '../../components/mobile/activityPage';
import ChooseIconModal from '../../components/modal/chooseIconModal';
import Navbar from '../../components/navbar';
import { getActivity, updateActivity } from '../../api';
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
  iconDiv: {
    width: '-moz-fit-content',
    width: 'fit-content',
    margin: '20px auto',
  },
});

function EditActivity() {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [icon, setIcon] = useState(DEFAULT_ICON);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const hasPermission = verifyPermission(CREATE_ACTIVITY_PERMISSION);

  const { data: activity, isFetching } = useQuery('activity', () => getActivity(id, false), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    setName(activity?.data.name);
    setDescription(activity?.data.description);
    setPageDescription(activity?.data.pageDescription);
    setIcon(activity?.data.icon);
  }, [activity]);

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description;
    setDescriptionError(!validatedDescription);

    return validatedName && validatedDescription;
  };

  const backToActivitiesList = () => {
    history.push(`/category/${activity?.data.categoryId}/activities`);
  };

  const handleEditActivity = async () => {
    if (validateInfo()) {
      const body = {
        name,
        description,
        pageDescription,
        icon,
      };

      const result = await updateActivity(body, id, setIsLoading);

      if (result) {
        toast.success('Atividade atualizada com sucesso');
        backToActivitiesList();
      }
    }
  };

  return (
    <Navbar>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <>
          <Header
            hasButton={hasPermission}
            buttonName="Atualizar atividade"
            onClick={handleEditActivity}
          >
            <IconButton color="inherit" onClick={() => backToActivitiesList()}>
              <ArrowLeftIcon />
            </IconButton>
          </Header>
          <Container maxWidth="xl">
            <Typography className={classes.title} variant="h5">
              Prototipação da atividade
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
                <ActivityScreen
                  title={name}
                  subtitle={activity?.data.category.name}
                  description={pageDescription}
                  icon={icon}
                  color={activity?.data.category.color ?? '#C6FFC1'}
                  textColor={activity?.data.category.textColor ?? '#24267E'}
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

export default EditActivity;
