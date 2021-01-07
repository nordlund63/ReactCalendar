

function BlogPost(props){
    return <h3>{props.userName}: {props.comment}</h3>;
}

function Blog(props){
    const lst = props.comments.map((comment, index) => 
        <BlogPost userName={comment.userName} comment={comment.comment} key={index}/>);

    return (
        <div>
            {lst}
        </div>
    )
}

export default Blog;