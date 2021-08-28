import React from 'react';
import { Container } from '@material-ui/core';
import { AppBar } from 'components/AppBar';
import { Button } from 'components/Button';
import { Close, KeyboardArrowRight } from "@material-ui/icons";

import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader';
import { ProcessPageFooter } from 'components/ProcessPageFooter';
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { useStyle } from "./ConfirmPassword.style";
import { PasswordInput } from 'feature/onboarding/components/PasswordInput';
import { PageTitle } from 'feature/onboarding/components/PageTitle';

export const ConfirmPassword: React.FC = () => {

  const style = useStyle();
  const homeRoute = "/"

  const [passwordInput, setPasswordInput] = React.useState("");

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordInput(event.target.value);

  const onCancelButtonClick = () => {
    //history.replace(OnboardingRoutes.activateAccount);
  };

  const onNextButtonClick = () => {
    //history.push(OnboardingRoutes.accountActivationCompletedForCard);
  };


  return (
    <Container maxWidth="xs" className={style.container}>
    <div className="main-form">
      <AppBar
        homeRoute={homeRoute}
        action={
          <Button
            palette="secondary"
            size="small"
            startIcon={<Close color="primary" />}
            onClick={onCancelButtonClick}
          >
            {cancelLabel}
          </Button>
        }
      />
      <div className="form-body">
        <div className="top">
          <PageTitle text="Ative sua Conta" />
          <ProcessDescriptionHeader
            title="Confirme sua senha"
            description="Essa senha deve ter 6 dígitos e deve ter ao menos uma letra"
          />
        </div>
        <div className="content">
          <div className="align-top">
            <PasswordInput
              label="Confirmar senha"
              onChange={onPasswordChange}
              value={passwordInput}
            />
          </div>
        </div>
      </div>
      <ProcessPageFooter
        primaryButton={
          <Button
            endIcon={<KeyboardArrowRight color="secondary" />}
            onClick={onNextButtonClick}
          >
            {nextLabel}
          </Button>
        }
      />
    </div>
  </Container>
  )
}