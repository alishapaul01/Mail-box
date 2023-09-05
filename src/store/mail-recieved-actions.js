import {mailReceivedActions} from './mailRecievedSLice'
export const fetchReceivedMails = () => {

const email = localStorage.getItem('email');

const emailId = email.split('@')[0];
return async(dispatch) => {
    const fetchData = async() => {
        const response = await fetch(`https://mail-box-3d7e2-default-rtdb.firebaseio.com/mailReceive${emailId}.json`);
        if(!response.ok) {
            throw new Error('Could not fetch data')
        };
        const data = await response.json();
        return data;

    }
        try {
         const mailData = await fetchData();
         dispatch(mailReceivedActions.replaceRecivedMail({
            mail: mailData.mail || [],
         }))
        } catch (error) {
            console.log(error)
        }
    };
};





export const sendToReceiver = (mailInput) => {
    let email = '';
    mailInput.mail.forEach((item) => email = item.to.split('@')[0])
    return async() => {
        const response = await fetch(`https://mail-box-3d7e2-default-rtdb.firebaseio.com/mailReceive${email}.json`,{
            method: 'PUT',
            body:JSON.stringify({
              mail:mailInput.mail
            })
        })
        if(!response.ok) {
            throw new Error('Request failed');
        }
    }
}