import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-redux';

class PostsShow extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    console.log('My new Post Display: ', this.props.post);
    return
    <div>Show post { fetchPost }</div>;
  }
}

function mapStateToProps(state) {
  return { fetchPost }
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
