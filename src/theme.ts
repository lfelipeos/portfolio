import { responsiveFontSizes } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#025939",
    },
    secondary: {
      main: "#590222",
    },
  },
  typography: {
    fontFamily: [
      //'-apple-system',
      //'BlinkMacSystemFont',
      //'"Segoe UI"',
      //'Roboto',
      '"Helvetica Neue"',
      //'Arial',
      //'sans-serif',
      //'"Apple Color Emoji"',
      //'"Segoe UI Emoji"',
      //'"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme