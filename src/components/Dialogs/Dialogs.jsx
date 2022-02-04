import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import s from './Dialogs.module.css'
import { Formik, Form, Field } from 'formik';



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);

    let MessagesElements = props.dialogsPage.messages
        .map(m => <DialogMessage message={m.message} />);


    return <div className={s.content}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div>
            <AddMessageForm addMessage={props.addMessage} />
            <div className={s.dialogsMessages}>
                {MessagesElements}
            </div>
        </div>

    </div>
};

const AddMessageForm = (props) => {
    const submit = (values, { setSubmitting }) => {
        props.addMessage(values.addMessageText)
        values.addMessageText =''
            setSubmitting(false);
    }
    return <Formik
        initialValues={{ addMessageText: '' }}
        onSubmit={submit}
    >
        {({ isSubmitting }) => (
            <Form>
                <Field component="textarea" name="addMessageText" />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
}


export default Dialogs;