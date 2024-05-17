import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#FE2E2E",
      },
    },
    typography: {
        fontFamily: "rotters"
    }
  });

  theme = responsiveFontSizes(theme);
  export default theme;