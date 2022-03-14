import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { primaryColor, secondaryColor } from '../../styles/colors.module.scss';

let theme = createTheme({
  //edit this to a color pallete your app
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

// const components: any = createTheme(theme, {
//   MuiButton: {
//     //add variants to button component
//     variants: [
//       {
//         props: { variant: 'dashed' },
//         style: {
//           textTransform: 'none',
//           border: `2px dashed ${theme.palette.primary.main}`,
//         },
//       },
//     ],
//     styleOverrides: {
//       root: {
//         fontSize: '1em',
//       },
//     },
//   },
// });

// add responsive MUI responsiveFontSize
theme = responsiveFontSizes(theme);

export default theme;
