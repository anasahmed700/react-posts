import { useState } from 'react';
import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'
import Modal from './Modal';
function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }
    function hideModalHandler() {
        setModalIsVisible(false)
    }

    let modalContent;
    if (modalIsVisible) {
        modalContent = (
            <Modal onModalClose={hideModalHandler}>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>
        )
    }
    return (
        <>
            {modalContent}
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