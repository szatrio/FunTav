import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import local from '../../helpers/local'
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { ItnrsPackageAction } from '../../public/redux/actions/itnrsPackage'
import '../../styles/global.css'

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


const Home = () => {
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
                        <img src={require('../../assets/img/funtav_logo.png')} id="funtavImgToolbar" />

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
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            FunTav Tour Packages
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Make custom itineraries
                                </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {itnrsPackage.map(p => (
                            <Grid item key={p.id_itnrs_package} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {p.origin} - {p.destination}
                                        </Typography>
                                        <Typography>

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => { history.push(`/package/detail/${p.id_itnrs_package}`) }}>
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
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

export default Home