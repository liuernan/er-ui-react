import React from 'react';
import './importIcons';
import '../../styles/index.scss';
import classNames from '../../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...restProps}) => {
  return (
    <svg className={classNames('er-ui-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;