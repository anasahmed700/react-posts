import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'
import Modal from './Modal';
function PostsList({ isPosting, onStopPosting }) {
    return (
        <>
            {isPosting && (
                <Modal onModalClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author="Ahmed" body="Learn react.js" />
            </ul>
        </>
    )
}

export default PostsList