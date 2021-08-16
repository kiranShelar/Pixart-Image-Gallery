import { Toolbar , AppBar, Typography} from '@material-ui/core'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='static' style={{backgroundColor : '#3A393F'}}>
            <Toolbar>
                <Typography variant="h6">
                PIXART
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
