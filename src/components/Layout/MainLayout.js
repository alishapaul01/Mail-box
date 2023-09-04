import { Container, Row, Col} from "react-bootstrap"
import MailOptions from "../Mail/MailOptions";
import Home from "../Home/Home";
import { Fragment } from "react";
import classes from './MainLayout.module.css'
const MainLayout = (props) => {
    return (
        <Fragment>
        <Home />
        <Container>
            <Row>
                <Col>
                <MailOptions />
                </Col>
                <Col md={10} className={classes.layout}>
                {props.children}
                </Col>
            </Row>
        </Container>
        </Fragment>
    )

};

export default MainLayout;