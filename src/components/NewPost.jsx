/* eslint-disable react/prop-types */
import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            body: enteredBody
        }
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Save</button>
            </p>
        </form>
    );
}

export default NewPost;