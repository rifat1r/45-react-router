import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid aqua',
        padding: '5px',
        borderRadius: '20px'
    }
    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h3>Id of post: {id}</h3>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;