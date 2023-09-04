import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import classes from './MailOptions.module.css';
import MailEditor from './MailEditor';
import { useState } from 'react';


const MailOptions = () => {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(true);
    }
    return (
        <Container className={classes.mailOptions}>
        <Button onClick={handleClick}>Compose</Button>
        <Row className={classes.optionRow}>  
        <Col className={classes.options}>
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            >
            <Nav.Item>
                <Nav.Link>Inbox</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Sent</Nav.Link>
            </Nav.Item>
            </Nav>
    </Col>  
    {/* {!isClicked && <Col md={10}>Inbox</Col>  } */}
    {isClicked && <Col md={8}><MailEditor /></Col>  }

  </Row> 
  </Container>
  )
};

export default MailOptions;