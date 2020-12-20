import React, { useEffect } from 'react'
import csc from 'country-state-city'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function CSC(props) {
    const { country, city, region } = props
    const classes = useStyles();
    const [cscCountry, setcscCountry] = React.useState('');
    const [cscRegion, setcscRegion] = React.useState('');
    const [cscCity, setcscCity] = React.useState('');

    const handleChangeCountry = (event) => {
        setcscCountry(event.target.value);
    };
    const handleChangeRegion = (event) => {
        setcscRegion(event.target.value);
    };
    const handleChangeCity = (event) => {
        setcscCity(event.target.value);
    };
    let code = cscCountry.split(",")[1];
    const options = [csc.getAllCountries().map((v, i) => ([v.name, v.id]))]
    const dropdownCountries = options[0].map((v, i) => v);
    let dropDownRegion = csc.getStatesOfCountry(code)
    if (dropDownRegion !== undefined) {
        dropDownRegion = dropDownRegion.map((v, i) => ([v.name, v.id]));
    }
    let codeRegion = cscRegion.split(',')[1];
    let dropDownCity = csc.getCitiesOfState(codeRegion);
    if (dropDownCity !== undefined) {
        dropDownCity = dropDownCity.map((v, i) => ([v.name, v.id]));
    }
    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
                <Select
                    native
                    value={cscCountry}
                    onChange={(e) => { handleChangeCountry(e); country(e.target.value.split(",")[0]); setcscCity('') }}
                    label="Country"
                    inputProps={{
                        name: 'country',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None">Select Country</option>
                    {dropdownCountries.map((v, i) => {
                        return <option key={i} value={v}>{v[0]}</option>
                    })}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Region</InputLabel>
                <Select
                    native
                    value={cscRegion}
                    onChange={(e) => { handleChangeRegion(e); region(e.target.value.split(",")[0]) }}
                    label="Region"
                    inputProps={{
                        name: 'region',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None">Select Region</option>
                    {dropDownRegion.map((v, i) => {
                        return <option key={i} value={v}>{v[0]}</option>
                    })}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">City</InputLabel>
                <Select
                    native
                    value={cscCity}
                    onChange={(e) => { handleChangeCity(e); city(e.target.value.split(",")[0]) }}
                    label="City"
                    inputProps={{
                        name: 'city',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None">City</option>
                    {dropDownCity.map((v, i) => {
                        return <option key={i} value={v}>{v[0]}</option>
                    })}
                </Select>
            </FormControl>
        </>
    )
}

export default CSC
