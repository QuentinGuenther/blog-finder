import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Link } from './Link';


describe('Link matches snapshot', () => {
  it('Link given page url', () => {
    const tree = renderer
      .create(<Link page='https://www.google.com/'  children='google' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Link functions with given page', () => {
  it('Link href points to the page given', () => {
    const link = shallow(<Link page='https://www.google.com/' children='google' />);
    expect(link.text()).toEqual('google');
    expect(link.find("a").at(0).props().href).toEqual('https://www.google.com/');
  });

  it('Link with no page given is a self link', () => {
    const link = shallow(<Link children='google' />);
    expect(link.text()).toEqual('google');
    expect(link.find("a").at(0).props().href).toEqual('#');
  });
});

describe('Link text is passed through', () => {
  it('Plain text is passed though', () => {
    const link = shallow(<Link children='google' />);
    expect(link.text()).toEqual('google');
  });
});