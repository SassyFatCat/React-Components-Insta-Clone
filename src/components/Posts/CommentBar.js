import React from 'react';

const CommentBar = (props) => {
const {addComment} = props
return <div>
<form>
  <label>
    Username: <input type="text" name="name" />
    Comment: <input type="text" name="comment" />
  </label>
  <input type="submit" value="Submit" onClick={event => {
      addComment();
      event.preventDefault()
  }}/>
</form> 
</div>
}

export default CommentBar