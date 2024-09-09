import Post from './Post'
import classes from './PostsList.module.css'
function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Anas" body="Keep coding" /> 
            <Post author="Ahmed" body="Learn react.js" /> 
        </ul>
    )
}

export default PostsList