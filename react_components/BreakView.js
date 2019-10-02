'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const BreakView = props => {
  const { breakLabel, breakClassName, breakLinkClassName, onClick } = props;
  const className = breakClassName || 'break';

  return (
    <li className={className} onClick={onClick} onKeyPress={onClick}>
      <a
        className={breakLinkClassName}
        role="button"
        tabIndex="0"
      >
        {breakLabel}
      </a>
    </li>
  );
};

BreakView.propTypes = {
  breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  breakClassName: PropTypes.string,
  breakLinkClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default BreakView;
