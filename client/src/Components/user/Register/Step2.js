import React from 'react'

function Step2(props) {
    const {onChange, user} = props
    return (
        <div>
           <h3 className='col-6 mx-auto'>Please Register</h3>
                <label htmlFor="firstname" className="sr-only">Firstname </label>
                <input type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={onChange}
                    className="form-control mt-2 mx-auto col-6"
                    placeholder="Enter FirstName" />
                <label htmlFor="middlename" className="sr-only">middlename </label>
                <input type="text"
                    name="middlename"
                    value={user.middlename}
                    onChange={onChange}
                    className="form-control  mt-2 mx-auto col-6"
                    placeholder="Enter MiddleName" />

                <label htmlFor="lastname" className="sr-only">lastname </label>
                <input type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={onChange}
                    className="form-control  mt-2 mx-auto col-6"
                    placeholder="Enter lastname" />
                <button onClick={props.next}>Next</button>
        </div>
    )
}

export default Step2
