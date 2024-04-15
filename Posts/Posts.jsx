import {useLoaderData} from "react-router-dom";
import Post from "../src/Components/Post/Post";

const Posts = () => {
    const Posts = useLoaderData()
    return (
        <div>
            <h2>Posts: {Posts.length}</h2>
            <div className="users">
                {
                 Posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;