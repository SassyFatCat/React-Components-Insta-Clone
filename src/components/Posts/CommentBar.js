import React, {useState} from 'react';

const CommentBar = (props) => {
const {addComment, post} = props;
let initialFormData = {
    Username:"invalid-user",
    Comment: "invalid-comment"
}
const [commentData, setCommentData] = useState(initialFormData)

const handleUsername = (event) => {
    setCommentData({...commentData, Username: event.target.value})
}
const handleComment = (event) => {
    setCommentData({...commentData, Comment: event.target.value})
}

const handleSubmit = (event) => {
    addComment(post.id, commentData.Username, commentData.Comment);
    event.preventDefault();
}

return <div>
<form>
  <label>
    Username: <input type="text" name="name" onChange={handleUsername}/>
    Comment: <input type="text" name="comment" onChange={handleComment}/>
  </label>
  <input type="submit" value="Submit" onClick={handleSubmit}
  />
</form> 
</div>
}



export default CommentBar