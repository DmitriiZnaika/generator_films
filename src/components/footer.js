import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function SocialNetwork() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/">
                <FacebookIcon/>
            </Link>{' '}
            <Link color="inherit"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/">
                <InstagramIcon/>
            </Link>{' '}
            <Link color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/">
                <TwitterIcon/>
            </Link>{' '}
            <Link color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.whatsapp.com/">
                <WhatsAppIcon/>
            </Link>{' '}

        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
                <SocialNetwork/>
                <Copyright />
            </footer>
        </React.Fragment>
    );
}