import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow, simulate } from 'enzyme';
import { Pill } from './Pill';

describe('Pill should match snapshot', () => {
  it('Pill should match snapshot', () => {
    const handleClick = jest.fn();

    const tree = renderer
      .create(<Pill clickHandler={handleClick} label='r/webdev' />)
      .toJSON();
    
    expect(tree).toMatchSnapshot(); 
  });
});

describe('Tab should be closable', () => {
  it('clicking the X button should trigger the pill to close', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Pill clickHandler={handleClick} label='' />)
    wrapper.find('button').simulate('click');
    expect(handleClick).toBeCalled();
  });
});