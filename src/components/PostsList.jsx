import { useState } from 'react';
import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'
import Modal from './Modal';
function PostsList({ isPosting, onStopPosting }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            {isPosting && (
                <Modal onModalClose={onStopPosting}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post
                    author={enteredAuthor}
                    body={enteredBody}
                />
                <Post author="Ahmed" body="Learn react.js" />
            </ul>
        </>
    )
}

export default PostsList