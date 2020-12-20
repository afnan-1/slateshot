import React from 'react'
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

function Dob(props) {
  const { dob, day, month, year } = props
  return (
    <div className="row">
      <div className="col pr-1 px-0 col-xs-6">
        <YearPicker
          defaultValue={'Year'}
          start={1950}                // default is 1900
          reverse                     // default is ASCENDING
          value={dob.year}     // mandatory
          onChange={(e) => year(e)}
          id={'year'}
          name='dob'
          classes={'mr-2 form-control'}
          optionClasses={'option classes'}
        />
      </div>
      <div className="col pr-1 px-0 col-xs-6">
        <MonthPicker
          defaultValue={'Month'}
          numeric
          short                     // default is full name
          caps                      // default is Titlecase
          endYearGiven              // mandatory if end={} is given in YearPicker
          year={dob.year}    // mandatory
          value={dob.month - 1}  // mandatory
          onChange={(e) => month(e)}
          id={'month'}
          name={'month'}
          classes={'mr-2 form-control'}
        />
      </div>
      <div className="col px-0 col-xs-6">
        <DayPicker
          defaultValue={'Day'}
          year={dob.year}    // mandatory
          month={dob.month - 1}  // mandatory
          endYearGiven              // mandatory if end={} is given in YearPicker
          value={dob.day}    // mandatory
          onChange={(e) => day(e)}
          id={'day'}
          name={'day'}
          classes={'mr-2 form-control'}
          optionClasses={'option classes'}
        />
      </div>
    </div>
  )
}

export default Dob
