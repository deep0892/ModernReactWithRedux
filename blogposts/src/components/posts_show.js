import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPost, deletPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDeleteClick() {
    this.props.deletPost(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost, deletPost })(PostsShow);
