export type { IconProps } from './icon/Icon';

export {default as Icon} from './icon/Icon';

// dev helpers, will be deleted soon
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import Icon from './icon/Icon';

// const fn = () => {
//   console.log('click');
// };
//
// const fn2 = () => {
//   console.log('mouse enter');
// };
//
// const fn3 = () => {
//   console.log('mouse leave');
// };
//
//
// const fn4 = () => {
//   console.log('touch start');
// };
//
// const App = () => {
//   return (
//     <div>
//       <div>hi</div>
//       <Icon name='heart' onClick={fn} className="custom-style xxx"/>
//       <Icon name='github-fill' onMouseEnter={fn2} className='xxx'/>
//       <Icon name='up' onMouseLeave={fn3}/>
//       <Icon name='down' onTouchStart={fn4}/>
//       <Icon name='left'/>
//       <Icon name='right'/>
//       <Icon name='zhihu'/>
//       <Icon name='wechat-fill'/>
//       <Icon name='chrome'/>
//       <Icon name='IE'/>
//     </div>
//   );
// };
//
// ReactDOM.render(<App/>, document.querySelector('#root'));
