import React from 'react'

function Step1(props) {
    const {onChange} = props
    return (
        <div>
            <div className='mx-auto col-6'>
                <b>Select one of the option below:</b><br/>
                <input type="radio" onChange={onChange} value="13" name="age" className='mr-2' />
                <span>Iam 13 or older</span><br/>
                <input type="radio" onChange={onChange} value="legalbehalf" name="age" className='mr-2' />
                <span>I am a parent or legal guardian registering on behalf of a minor</span><br/>
                <button onClick={props.next}>
                Next
                </button>
            </div>
           
        </div>
    )
}

export default Step1
