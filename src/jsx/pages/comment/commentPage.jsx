// Importing part
import InputComponent from "./components/inputComponent";
import '../../../css/pages/comment/commentPageStyle.css';

// Creating and exporting comment page as default
export default function CommentPage() {
    // Returning JSX
    return (
        <div className={'comment-page'}>
            <form action="#" className={'form'}>
                <InputComponent id={'name'} label={'Name'} type={'text'} />
                <InputComponent id={'tel'} label={'Tel'} type={'tel'} />
                <textarea name="content" className="textarea" id={'content'} placeholder={'Message'} />
                <button className={'submit-btn'}>submit</button>
            </form>
        </div>
    );
}