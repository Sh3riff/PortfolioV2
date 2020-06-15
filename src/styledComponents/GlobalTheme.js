import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme ={
    color:{
        primary: '#000040',
        accent: '#b86b77',
        neutral: '#fff',
        grey: '#ccc',
        red: 'red',
    }
};


const Theme = ({ children }) => (
    <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
  );

export default Theme;
