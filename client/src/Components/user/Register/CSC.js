import React from 'react'
import csc from 'country-state-city'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function CSC(props) {
    const { country, city, state } = props
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
        if(dropDownRegion!==undefined){
        dropDownRegion = dropDownRegion.map((v,i)=> ([v.name,v.id]));
        }
    let codeRegion = cscRegion.split(',')[1];
    let dropDownCity = csc.getCitiesOfState(codeRegion);
    if(dropDownCity!==undefined){
        dropDownCity = dropDownCity.map((v,i)=> ([v.name,v.id]));
        }
    console.log(cscCity.split(",")[0]);
    // console.log(cscCity.split(",")[0]);
    // console.log(cscCity.split(",")[0]);


    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
                <Select
                    native
                    value={cscCountry}
                    onChange={handleChangeCountry}
                    label="country"
                    inputProps={{
                        name: 'country',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
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
                    onChange={handleChangeRegion}
                    label="region"
                    inputProps={{
                        name: 'region',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
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
                    onChange={handleChangeCity}
                    label="city"
                    inputProps={{
                        name: 'city',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {dropDownCity.map((v, i) => {
                        return <option key={i} value={v}>{v[0]}</option>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default CSC
