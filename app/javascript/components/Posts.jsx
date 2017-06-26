var React = require("react")
import Post from './Post.jsx'
class Posts extends React.Component {
  state = {
    posts: this.props.data,
  }
  static getDefaultProps = {
    posts: [],
  }
  render() {
   return (
     <div className="posts">
        {this.state.posts.map((post) => {
          return React.createElement(
            Post,
            {
              key: post.id,
              post: post,
            },
            null
          )
        })}
     </div>
   );
  }
}
export default Posts;
