import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Day Zero Workshop with Okta
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          The purpose of this workshop is to provide you with a hands-on experience using the Okta Identity Cloud (Okta) service.  Okta enables you to quickly and easily add identity / security services to your custom developed applications whether these applications are built for employees, partners, and/or customers.   By leveraging Okta for your identity and security services, you can focus on building high quality application experiences and focus your efforts on the business functions and value that your users expect.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Authentication" btnTitle="Show me More" href='https://drive.google.com/drive/folders/11FZYlnGg1oB7m4NEbdNo7Wtmfl_4F0MA?usp=sharing'/>
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Authorization" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Inline Hooks" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Workflows" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Single Sign On" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="API Access Management" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
