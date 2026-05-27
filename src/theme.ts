import { responsiveFontSizes } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#010F0A",
    },
    secondary: {
      main: "#0CBF80",
    },
      background: {
        default: "#010F0A",
        paper: "#F4F6F5",      
      }
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