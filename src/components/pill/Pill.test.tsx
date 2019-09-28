import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow, simulate } from 'enzyme';
import { Pill } from './Pill';

describe('Pill should match snapshot', () => {
  it('Pill should match snapshot', () => {
    const handleClick = jest.fn();

    const tree = renderer
      .create(<Pill clickHandler={handleClick} label='' />)
      .toJSON();
    
    expect(tree).toMatchSnapshot(); 
  });
});

describe('', () => {
  it('clicking the X button should trigger the pill to close', () => {
    const handleClick = jest.fn();

    const wrapper = shallow(<Pill clickHandler={handleClick} label='' />)

    wrapper.find('ref[close]').simulate('click');

    expect(handleClick).toBeCalled();
  })
})