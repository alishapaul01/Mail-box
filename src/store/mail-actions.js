import { mailActions } from "./mailSLice";
const email = localStorage.getItem('email');
const emailId = email.split('@')[0];


export const receivedMail = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await fetch(`https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail${emailId}.json`);
            if(!response.ok) {
                throw new Error('Could not fetch data')
            };
            const data = await response.json();
            return data;
        }

            try {
             const mailData = await fetchData();
             dispatch(mailActions.replaceMail({
                mail: mailData.mail || [],
             }))
            } catch (error) {
                console.log(error)

        };
    };
}
export const sendMail = (mailInput) => {

    return async() => {

            const response = await fetch(`https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail${emailId}.json`,{
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