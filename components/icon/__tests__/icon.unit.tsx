import React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Icon from '../Icon';

describe('Icon', () => {
  it('rendering successfully', () => {
    const json = renderer.create(<Icon name="heart"/>).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('has custom class names', () => {
    const json = renderer.create(<Icon name="heart" className="custom custom2"/>).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('can handling events', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});