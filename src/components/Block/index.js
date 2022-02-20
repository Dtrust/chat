import React from 'react';
import classNames from 'classnames';

import './Block.scss'



const Block = ({ children }) => <div className={classNames('block', classNames)}>{children}</div>;

export default Block;
