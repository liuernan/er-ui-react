import React from 'react';
import './importIcons';

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="er-ui-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;