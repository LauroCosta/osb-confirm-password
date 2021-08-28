import React from 'react';
import { Box, CssBaseline, MuiThemeProvider, ThemeProvider } from '@material-ui/core'
import { theme } from '../../_config/theme'

import './App.scss'
import { Router } from '../Router';
import { useStyle } from './App.style';

export const App: React.FC = () => {
  
  const style = useStyle();

  
  return (

    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={style.app}>
        <Router />
      </Box>
    </MuiThemeProvider>


  );
}