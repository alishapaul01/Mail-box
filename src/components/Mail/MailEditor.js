import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button} from "react-bootstrap";
import classes from './MailEditor.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import {mailActions} from '../../store/mailSLice'


const MailEditor = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const dispatch = useDispatch();
  const emailId= localStorage.getItem("email");
  const updateEmail= (e) => {
      setEnteredEmail(e.target.value);
  }
  const updateSubject = (e) => {
      setEnteredSubject(e.target.value)
  }
  const updateText = (e) => {
  e.blocks.forEach((item) =>setEnteredText(item.text)
  )
  }
  const formSubmitHandler = (e) => {
      e.preventDefault();
      const mailInput = {
          from:emailId,
          to:enteredEmail,
          subject:enteredSubject,
          text:enteredText
      };
      dispatch(mailActions.sent(mailInput))
  }
      return (
        <>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
          <label htmlFor="to">To: </label>
          <input type='email' id='email' value={enteredEmail} onChange={updateEmail}></input>
          </div>
          <div className={classes.control}>
          <label htmlFor="subject">Subject: </label>
          <input type='text' id='subject' value={enteredSubject} onChange={updateSubject}></input>
          </div>
          <div className={classes.control}>
          <label htmlFor="text">Text:  </label>
          <Editor 
          value={enteredText}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onChange={updateText}
         />
         </div>
         <div className={classes.actions}>
          <Button type="submit">Send</Button>
          <Button>Cancel</Button>
          </div>
        </form>
        </>
      )}

export default MailEditor