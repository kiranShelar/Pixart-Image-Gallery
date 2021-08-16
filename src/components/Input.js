import { TextField } from '@material-ui/core'
import React from 'react'

const Input = ({change, submit}) => {
    return (
        <form onSubmit={submit} style={{margin:'2rem 0'}}>
          <TextField onChange={change} fullWidth label="Search stunning high resolution images..."></TextField>  
        </form>
    )
}

export default Input
