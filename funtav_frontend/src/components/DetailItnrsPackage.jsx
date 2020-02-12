import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import local from '../helpers/local'
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { ItnrsPackageAction } from '../public/redux/actions/itnrsPackage'
import '../styles/global.css'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/szatrio">
                Satrio Utomo
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
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
    toolbar: {
        backgroundColor: "#cfe4fc",
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    inline: {
        display: 'inline'
    }
}));


const DetailItnrsPackage = () => {
    const classes = useStyles();
    const history = useHistory()

    const { itnrsPackage } = useSelector(state => ({
        itnrsPackage: state.itnrsPackage.itnrsPackage,
    }));
    const dispatch = useDispatch()

    useEffect(() => {
        if (!local().token) {
            history.push("/login")
        } else {
            dispatch(ItnrsPackageAction())
        }
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar className={classes.toolbar}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <img src={require('../assets/img/funtav_logo.png')} id="funtavImgToolbar" />

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {local().name}
                        </Typography>


                        <Avatar className={classes.large}
                            alignItems="center"
                            src="https://source.unsplash.com/random"
                        />

                    </Grid>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                       
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    FunTav
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Project for Fiture Teknologi Inovasi
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

export default DetailItnrsPackage