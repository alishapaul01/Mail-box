import { Container} from "react-bootstrap";
import { useSelector  } from "react-redux";
const Inbox = () => {
    const receivedMail = useSelector(state => state.mailReceive.receivedMail)
    return(
    <Container style={{marginTop:'2rem'}}>
        <ul>
        {receivedMail.map((item) => <li>
            <span>From:{item.from} </span>
            <span>Subject: {item.subject} </span>
            <span>Text: {item.text}</span></li> )}
        </ul>
        </Container>
      )
    }

export default Inbox;