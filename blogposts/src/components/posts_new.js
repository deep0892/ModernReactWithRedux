import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux';

class PostsNEW extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <input className="form-control" {...field.input} type="text" />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="tags" label="Tags" component={this.renderField} />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
      </form>
    );
  }
}

// export default connect(null, {})(PostsNEW);
export default reduxForm({
  form: 'PostsNewForm',
})(PostsNEW);
