var React = require("react")
class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-title">
          {this.props.post.title} #{this.props.post.id}
        </div>
        <div className="post-body">
          {this.props.post.body}
        </div>
      </div>
    )
  }
}
export default Post
