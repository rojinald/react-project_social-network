import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import s from './Dialogs.module.css'
import { Formik, Form, Field } from 'formik';
import CustomTextArea from '../common/CustomTextArea/CustomTextArea';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img} key={d.id} />);

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
        values.addMessageText = ''
        setSubmitting(false);
    }
    const textAreaValidate = (values) => {
        const errors = {};
        if (!values.addMessageText) {
            errors.addMessageText = 'Required';
        } else if (
            values.addMessageText.length > 10
        ) {
            errors.addMessageText = 'Max symbols 10';

        }
        return errors;
    }

    return <Formik
        initialValues={{ addMessageText: '' }}
        onSubmit={submit}
        validate={textAreaValidate}
    >
        {({ isSubmitting }) => (
            <Form>
                <Field
                    component={CustomTextArea}
                    name="addMessageText"
                    placeholder='Create a new Message'
                />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
}

export default Dialogs;