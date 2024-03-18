// Importing part
import '../../../css/pages/password-recovery-page/passwordRecoveryPageStyle.css';
import InputComponent from "./components/inputComponent";

// Creating and exporting password Recovery page as default
export default function PasswordRecoveryPage() {
    // Returning JSX
    return (
        <div className={'password-recovery-page'}>
            <form action="#" className={'form'}>
                <InputComponent type={'text'} label={'Phone number or email'} id={'tel'} />
                <button className={'submit-btn'}>SUBMIT</button>
            </form>
        </div>
    );
}