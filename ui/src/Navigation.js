import { ReactComponent } from 'react';
import { render } from '@testing-library/react';
import React from 'react';
import {Navbar} from 'react-bootstrap';




class Navigation extends React.Component{

    render(){
        return (
            // <Navbar bg="dark" variant="dark">
            // </Navbar>
            //<div>Navigation</div>

            <Navbar bg="dark" variant="dark"></Navbar>
        )
        // <div>Navigation</div>)
    }

}

export default Navigation;


