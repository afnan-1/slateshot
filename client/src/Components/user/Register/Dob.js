import React from 'react'
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

function Dob(props) {
    const {dob, onChange, day,month,year} = props
    // const 
    return (
        <div>
            <YearPicker
          defaultValue={'select year'}
          start={1950}                // default is 1900
          reverse                     // default is ASCENDING
          value={dob.year}     // mandatory
          onChange={(e)=>year(e)}
          id={'year'}
          name='dob'
          classes={'mr-2'}
          optionClasses={'option classes'}
        />/
        <MonthPicker
          defaultValue={'select month'}
          numeric
          short                     // default is full name
          caps                      // default is Titlecase
          endYearGiven              // mandatory if end={} is given in YearPicker
          year={dob.year}    // mandatory
          value={dob.month-1}  // mandatory
          onChange={(e)=>month(e)}
          id={'month'}
          name={'month'}
          classes={'mr-2 ml-1'}
          optionClasses={'option classes'}
        />/
        <DayPicker
          defaultValue={'select day'}
          year={dob.year}    // mandatory
          month={dob.month-1}  // mandatory
          endYearGiven              // mandatory if end={} is given in YearPicker
          value={dob.day}    // mandatory
          onChange={(e)=>day(e)}
          id={'day'}
          name={'day'}
          classes={'ml-1'}
          optionClasses={'option classes'}
        />
        </div>
    )
}

export default Dob
