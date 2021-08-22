import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';


function NavigationBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BitFace</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#mantel">Metamask</Nav.Link>
                </Nav>
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                        <Popover id={`popover-positioned-bottom`}>
                        <Popover.Header as="h3">Connect your Metamask wallet</Popover.Header>
                        <Popover.Body>
                        <p>Here is the button</p>
                        <Button variant="secondary">Metamask</Button>
                        </Popover.Body>
                        </Popover>
                    }
                    >
                </OverlayTrigger>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;