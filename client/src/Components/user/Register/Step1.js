import React from 'react'

function Step1(props) {
    const { onChange, user } = props
    return (
        <div className='mx-auto col-10 jumbotron mt-4'>
            <h3 className='display-10'>Select one of the option below:</h3>
            <input type="radio" onChange={onChange} value="13" name="age" className='mr-2' />
            <span>Iam 13 or older</span><br />
            <input type="radio" onChange={onChange} value="legalbehalf" name="age" className='mr-2' />
            <span>I am a parent or legal guardian registering on behalf of a minor</span><br />
            {user.age == 'N' ?
                <button className="btn btn-dark mt-4 px-4 disabled">
                    Next
                </button> :
                <button onClick={props.next} className="btn btn-dark mt-4 px-4">
                    Next
                </button>}
        </div>
    )
}

export default Step1
