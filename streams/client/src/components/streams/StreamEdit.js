import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions/index';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return <div>StreamEdit</div>;
  }
}

const mapStateToProp = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProp, { editStream, fetchStream })(StreamEdit);
