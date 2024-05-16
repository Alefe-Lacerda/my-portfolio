import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#DC241A",
      },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
  });

  theme = responsiveFontSizes(theme);
  export default theme;