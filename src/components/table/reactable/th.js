import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isUnsafe } from './unsafe';
import filterPropsFrom from './lib/filter_props_from';

export default class Th extends PureComponent {
  static defaultProps = {
    children: null,
  };
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Object),
    ]),
  };
  render() {
    if (isUnsafe(this.props.children)) {
      const options = {};
      if (this.props.children) {
        options.dangerouslySetInnerHTML = { __html: this.props.children.toString() };
      }
      return (
        <th
          {...filterPropsFrom(this.props)}
          {...options}
        />
      );
    }
    return <th {...filterPropsFrom(this.props)}>{this.props.children}</th>;
  }
}
