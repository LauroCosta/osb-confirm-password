import React from "react";
import { Typography } from "@material-ui/core";
import OtpInput from 'react-otp-input';

import "./PasswordInput.scss";

interface PasswordProps {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<any>>;
}
export const PasswordInput = ({ label, value, onChange }: PasswordProps) => {

  return (
      <div className="content-password">
        
        <strong>{label}</strong>
      
        <OtpInput
          className="input"
          value={value}
          onChange={onChange}
          isInputSecure={true}
          numInputs={6}
        />
      </div>
  );
};
