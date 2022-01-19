import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../okta-logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { Link } from '@material-ui/core' 
//import {Link } from 'react-router-dom'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   CIAM Workshop
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Agenda
                </Typography>
                <Typography variant="h6" className={classes.menuItem} component={Link} to='https://funauth.io'>
                    <a href='https://funauth.io' target='_blank'> FunAuth Challenge </a>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <a href = 'https://drive.google.com/drive/folders/11FZYlnGg1oB7m4NEbdNo7Wtmfl_4F0MA?usp=sharing'> Demos </a>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Resources 
                </Typography>
                <CustomBtn txt="Trial Our Product" href="https://developer.okta.com"/>
            </Toolbar>
    )
}

export default NavBar
