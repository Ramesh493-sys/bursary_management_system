import { Container,  Grid, makeStyles, TextField, FormControl, InputLabel, Select, MenuItem, } from "@material-ui/core";
//import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
//import TimerIcon from "@material-ui/icons/Timer";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(8),
    },
    Paper: {
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        position: "relative",
        overflow: "hidden",
        "&::after": {
            content: "' '",
            position: "absolute",
            display: "block",
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            height: "4px",
            top: 0,
            left: 0,
        },
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    FormControl: {
        margin: theme.spacing(1),
        minWidth:120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    footer: {
        margin: theme.spacing(2) + "px 0",
    },
}));

function Form(){
    const classes = useStyles();

    return(
        <Container maxWidth="right" className={classes.root}>
            <Grid item xs={12} sm={12}>
                <FormControl size="small" variant="outlined" fulWidth>
                    <InputLabel id="employed">5. If you are employed</InputLabel>
                    <select
                        labelId="employed"
                        id="employed"
                        label="employed"
                        >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="Name & Address of the Establishment/Department"
                    label="Name & Address of the Establishment/Department"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField 
                    id="Post"
                    label="Post"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField 
                    id="Salary Scale"
                    label="Salary Scale"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField 
                    id="Salary"
                    label="Salary"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="Date of appointment"
                    label="Date of appointment"
                    placeholder="DD/MM/YYYY"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl size="small" variant="outlined" fulWidth>
                    <InputLabel id="married">6. If you are married</InputLabel>
                    <select
                        labelId="married"
                        id="married"
                        value="Yes"
                        label="married"
                        >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="Date of married"
                    label="Date of married"
                    placeholder="DD/MM/YYYY"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="Name of Spouce"
                    label="Name of Spouce"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="If emplyed the name of the establishmnent"
                    label="If employed the name of the establishment"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="Present Post"
                    label="Present post"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="Present Salary"
                    label="Present Salary"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl size="small" variant="outlined" fulWidth>
                    <InputLabel id="Guardians">7. Details of the guardians</InputLabel>
                    <Select
                        labelId="guardians"
                        id="guardians"
                        value="Father"
                        label="guardians"
                        >
                            <MenuItem value="Father">Yes</MenuItem>
                            <MenuItem value="Mother">No</MenuItem>
                            <MenuItem value="Other Guardian">Other Guardian</MenuItem>
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="Full Name"
                    label="Full Name"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <FormControl size="small" varient="outlined" fullWidth>
                    <InputLabel id="living">Whether Living or Not</InputLabel>
                    <Select 
                        labelId="living"
                        id="living"
                        value="Yes"
                        label="living"
                    >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="Age"
                    label="If livingAge"
                    placeholder="Years/Months"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="occupation"
                    label="occupation"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="address of work place"
                    label="address of place or work/oe where worked"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    id="gross annual income"
                    label="State gross annual income from occupation/pension"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="Annual Income"
                    label="Annual income from house and property"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="annual income from others"
                    label="Annual income from other sourses"
                />
            </Grid>
        </Container>
    );
}

export default Form;
    
 