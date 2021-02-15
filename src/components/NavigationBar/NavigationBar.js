import { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import _ from 'lodash';

const NavigationBar = (props) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link href="#featured">Featured</Nav.Link>

                </Nav.Item>
                <Nav.Link href="#apparel">Apparel</Nav.Link>
            </Nav>
            <div>
                <Button variant="dark">Login</Button> {' '}
                <Button variant="dark">Sign up</Button>
            </div>
        </Navbar>
    )
}

export default NavigationBar;