import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
      
        display: "flex",
        flexWrap: "wrap",
    },
    leftSide: {
        flex: 2,
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    rightSide: {
        flex: 1,
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    
    paper: {
        height: "100%",
        margin: theme.spacing(0),
        padding: theme.spacing(2),

    },
    top:{
        fontSize: "3em",
        fontWeight: "bold",
        
    },


    grid: {
        margin: theme.spacing(1),
    },
    h2: {
        color: 'black',
        fontSize: "2em",
    },
}));

const Admin = props => {
    const classes = useStyles();
    const [disabled, setDisabled] = useState(true);
    function handleSearch() {
        setDisabled(true);
    };
    

    return (
        
        <div className={classes.root}>
       
        <div className={classes.top}>
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
          
        >
        
        ADMIN PORTAL
        </Grid>
        </div>

        <Grid item xs>
        <TextField placeholder="Enter Aadhar Number" variant="outlined"  fullWidth />
        </Grid>
                            <Grid container spacing={2} alignItems="center" justify="flex-end">
                                <Grid item ><Button variant="outlined" onClick={handleSearch}><SearchIcon color="action" />Search</Button></Grid>
                            </Grid>
            <div className={classes.container}>
            
            
                <div className={classes.leftSide}>
                    <h2 className={classes.h2}>Results: </h2>
                    <form>
                        <Paper className={classes.paper}>
                            
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    Name :
                            </Grid>
                                <Grid item xs>
                                    <TextField id="text" placeholder="Name" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    Gender :
                            </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Gender" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    Occupation:
                            </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Occupation" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    Age :
                            </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Age" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    Marital Status :
                            </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Marital Status" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                   Family Members :
                            </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Memeber 1" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Memeber 2" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                            
                        </Paper>
                    </form>
                </div>
               
            </div>
        </div>

    )
}
export default Admin
