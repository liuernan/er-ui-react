import React from 'react';
import './importIcons';
import '../styles/index.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="er-ui-icon"
         {...props}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;