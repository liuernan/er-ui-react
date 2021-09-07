import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './icon/Icon';

const App = () => {
  return (
    <div>
      <Icon name='heart'/>
      <Icon name='github-fill'/>
      <Icon name='up'/>
      <Icon name='down'/>
      <Icon name='left'/>
      <Icon name='right'/>
      <Icon name='zhihu'/>
      <Icon name='wechat-fill'/>
      <Icon name='chrome'/>
      <Icon name='IE'/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
