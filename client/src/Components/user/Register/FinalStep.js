import React, { useState } from 'react'
import CSC from './CSC'
import Dob from './Dob'
function FinalStep(props) {
    const [confirmemail, setconfirmEmail] = useState('')
    const { onChange, user, day, month, year, country, city, state } = props
    return (
        <div>
            <div className="mt-2 mx-auto col-6">
                <label htmlFor="username">Username: </label>
                <input type="text"
                    name="username"
                    value={user.username}
                    onChange={onChange}
                    className="form-control "
                    placeholder="Enter Username" />
            </div>
            <div className="mt-2 mx-auto col-6">
                <label htmlFor="password">Password: </label>
                <input type="password"
                    name="password"
                    value={user.password}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password" />
            </div>
            <div className="mt-2 mx-auto col-6">
                <label htmlFor="email">email </label>
                <input type="text"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter email" />
            </div>
            <div className="mt-2 mx-auto col-6">
                <label htmlFor="email">Confirm email </label>
                {/* {showerr == "" ? '': alert(showerr) } */}

                <input type="text"
                    name="confirmemail"
                    value={confirmemail}
                    onChange={(e) => setconfirmEmail(e.target.value)}
                    className="form-control"
                    placeholder="Confirm email" />
                <label className="my-2">Gender (to play):</label>
                <input type="radio" onChange={onChange} value="male" name="gender" className='mr-1 ml-2' />
                <span>Male</span>
                <input type="radio" onChange={onChange} value="female" name="gender" className='mr-1 ml-2' />
                <span>Female</span><br />

                <input type="checkbox" value="transgender" name="transgender" onChange={onChange} />
                <span>Transgender/Non-Binary</span><br />
                <input type="checkbox" value="twins" name="twins" onChange={onChange} />
                <span>Twins/Mutiples</span><br />


                <label className='mt-3'>Are you 18 or older or legally emancipated?</label>
                <input type="radio" onChange={onChange} value="Yes" name="older18" className='mr-1 ml-2' />
                <span>Yes</span>
                <input type="radio" onChange={onChange} value="No" name="older18" className='mr-1 ml-2' />
                <span>No</span><br />

                <Dob onChange={onChange} dob={user.dob} day={day} month={month} year={year} />
                <CSC city={city} country={country} state={state} user={user.csc} />
            </div>

        </div>
    )
}

export default FinalStep
