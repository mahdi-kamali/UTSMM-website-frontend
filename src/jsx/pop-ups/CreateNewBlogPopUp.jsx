import { useDispatch } from "react-redux"
import { closePopUp } from "../../features/popUpReducer"
import { Icon } from "@iconify/react"
import AdminPanelFiledset from "../dashboards/admin/components/tools/fieldset/AdminPanelFiledset"
import Legend from "../dashboards/admin/components/tools/fieldset/Legend"
import FieldBody from "../dashboards/admin/components/tools/fieldset/FieldBody"
import { useState } from "react"
import { post, put } from "../../lib/useFetch"
import { API } from "../../lib/envAccess"
import { showError, showSuccess } from "../../lib/alertHandler"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreateNewBlogPopUp({ refresh }) {


    const [image, setImage] = useState(require("../../images/place-holder/1.png"))
    const [description, setDescription] = useState('');


    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }


    const handleOnImageChange = (e) => {
        const file = e.target.files[0]

        const fileReader = new FileReader()
        fileReader.onload = (e) => {
            const result = e.target.result
            setImage(result)
        }

        fileReader.readAsDataURL(file)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        post(API.ADMIN_DASHBOARD.BLOGS.POST,
            formData)
            .then(resp => {
                showSuccess(resp).finally(end=>{
                    handleCloseButtonClick()
                })
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
            .finally(end => {
                refresh()
            })

    }


    return (
        <form className="admin-panel-create-blog-pop-up"
            onSubmit={handleSubmit}>
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>

            <div className="pop-up-header">
                <h1>
                    Create Blog
                </h1>
            </div>
            <div className="pop-up-body">


                <div className="image-input">
                    <img src={image} />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleOnImageChange} />
                </div>

                <AdminPanelFiledset className={"create-faq-field-box"}>
                    <Legend>
                        <Icon icon="pajamas:title" />
                        <span>Title</span>
                    </Legend>
                    <FieldBody>
                        <input
                            type="text"
                            name="title"
                            defaultValue={""} />
                    </FieldBody>
                </AdminPanelFiledset>

                <div style={{margin: '20px 0'}}>
                    <ReactQuill style={{width: '100%'}} theme="snow" value={description} onChange={setDescription} />
                </div>

                <button className="submit">
                    <span>Submit </span>
                    <Icon icon="iconamoon:send-fill" />
                </button>
            </div>

        </form>
    )
}
