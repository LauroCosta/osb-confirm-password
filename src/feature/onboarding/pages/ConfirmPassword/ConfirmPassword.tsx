import React from 'react';
import { Container } from '@material-ui/core';
import { AppBar } from 'components/AppBar';
import { Button } from 'components/Button';
import { KeyboardArrowRight } from "@material-ui/icons";

import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader';
import { ProcessPageFooter } from 'components/ProcessPageFooter';
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { useStyle } from "./ConfirmPassword.style";
import { PasswordInput } from 'feature/onboarding/components/PasswordInput';
import { CloseButton } from 'feature/onboarding/components/CloseButton';
import "./style.scss";

export const ConfirmPassword: React.FC = () => {

  const style = useStyle();
  const homeRoute = "/"

  const [passwordInput, setPasswordInput] = React.useState("");

  const onPasswordChange = (event: string) =>
    setPasswordInput(event);

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
              startIcon={<CloseButton />}
              onClick={onCancelButtonClick}
            >
              {cancelLabel}
            </Button>
          }
        />


        <div className="top">
          <ProcessDescriptionHeader
            title="Ative sua conta"
            subtitle="Confirme sua senha"
            description="Essa senha deve ter 6 dígitos e deve ter ao menos uma letra"
          />
        </div>

        <div className="content">
          <PasswordInput
            label="Confirmar senha"
            onChange={onPasswordChange}
            value={passwordInput}
          />
        </div>

        <footer>
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
        </footer>
      </div>

    </Container >
  )
}