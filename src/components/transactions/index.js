import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getBank } from '../../store/transaction/action';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
    },
    root1: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '200',
        },
    },
}));

export default function Transactions() {
    const [age, setAge] = React.useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const user = useSelector(x => {
        return x.Customer;
    });
    const user1 = useSelector(x => {
        return x.Transaction;
    });
    const classes = useStyles();
    const [inputvalues, setinputvalues] = useState({
        receiveraccountholdernumber: "", receiveraccountholdername: "", custbal: "", custcur: "", bic: "", recname: "", recano: "",
        tt: "", messege: "", amount: ""
    });
    const handleInput = (e) => {
        setinputvalues({ ...inputvalues, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {




        fetch("http://localhost:8081/transaction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputvalues)
        }).then(() => {
            console.log();
        });

    }



    return (
        <div className={classes.root1}>
            <h3>Transaction Page</h3>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor="secondary.main" color="secondary.contrastText" p={0.5}> Sender</Box>
                    <TextField
                        onChange={handleInput}
                        name="receiveraccountholdernumber"
                        id="standard-read-only-input"
                        label="Customer ID"
                        defaultValue={user.customerDetails.customerid}
                        color="secondary"
                        size="small"
                        style={{ paddingRight: "20px" }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        onChange={handleInput}
                        name="receiveraccountholdername"
                        id="standard-read-only-input"
                        label="Account Holder Name"
                        defaultValue={user.customerDetails.accountholdername}
                        color="secondary"
                        size="small"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        onChange={handleInput}
                        name="custbal"
                        id="standard-read-only-input"
                        label="Clear Balance"
                        defaultValue={user.customerDetails.clearbalance}
                        color="secondary"
                        size="small"
                        style={{ paddingRight: "20px" }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        onChange={handleInput}
                        name="custcur"
                        id="standard-read-only-input"
                        label="CUR"
                        defaultValue="INR"
                        color="secondary"
                        size="small"

                        InputProps={{
                            readOnly: true,
                        }}
                    />

                </Grid>
                <Grid item xs={6}>

                    <Box bgcolor="secondary.main" color="secondary.contrastText" p={0.5}> Receiver</Box>
                    <TextField name="bic" id="standard-basic" label="BIC" color="secondary"
                        onChange={(e) => {
                            setinputvalues({
                                ...inputvalues, [e.target.name]: e.target.value
                            })
                            dispatch(getBank(e.target.value))
                        }} />

                    <TextField
                        name="bankname"
                        onChange={handleInput}
                        id="standard-read-only-input"
                        label=" "

                        value={user1.bankDetails.bankname}
                        color="secondary"
                        size="small"

                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField name="recname" id="standard-basic" label="Account Holder Name" color="secondary" />
                    <TextField name="recano" id="standard-basic" label="Account Holder Number" color="secondary" />

                </Grid>
                <Grid item xs={12}>
                    <Box bgcolor="secondary.main" color="secondary.contrastText" p={0.5}> Transaction</Box>
                    <FormControl className={classes.formControl} size="small">
                        <InputLabel id="demo-simple-select-autowidth-label" name="tt">Transfer Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={2}>Bank Transfer</MenuItem>
                            <MenuItem value={2}>Customer Transfer</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} size="small" >
                        <InputLabel name="messege" id="demo-simple-select-autowidth-label" color="red" width="50px">Message Code</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={2}>CHQB</MenuItem>
                            <MenuItem value={2}>CORT</MenuItem>
                            <MenuItem value={2}>HOLD</MenuItem>
                            <MenuItem value={2}>INTC</MenuItem>
                            <MenuItem value={2}>PHOB</MenuItem>
                            <MenuItem value={2}>PHOI</MenuItem>
                            <MenuItem value={2}>PHON</MenuItem>
                            <MenuItem value={2}>REPA</MenuItem>
                            <MenuItem value={2}>SDVA</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField name="amount" id="standard-basic" label="Amount" color="secondary" />
                </Grid>
                <button onClick={handleSubmit} >Submit</button>
            </Grid>
        </div>
    );
}