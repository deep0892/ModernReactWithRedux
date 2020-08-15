import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux';

class PostsNEW extends Component {
  renderField(field) {
    const {
      meta: { touched, error },
      label,
      input,
    } = field;
    const clsName = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={clsName}>
        <label htmlFor="">{label}</label>
        <input className="form-control" {...input} type="text" />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-negative">Cancel</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  return errors;
}

// export default connect(null, {})(PostsNEW);
export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(PostsNEW);
