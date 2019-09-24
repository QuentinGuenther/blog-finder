import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { BlogImage, DEFAULT_IMG_URL } from './BlogImage';

describe('BlogImage should match snapshot', () => {
  it('Interaction should match snapshot', () => {
    const tree = renderer
      .create(<BlogImage imgPath='./test.png' altText='test' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('BlogImage should handle working images', () => {
  it('Working image path should display', () => {
    const blogImage = shallow(<BlogImage imgPath='./index.png' altText='this is alt' />);
    expect(blogImage.find('img').at(0).props().src).toEqual('./index.png');
    expect(blogImage.find('img').at(0).props().alt).toEqual('this is alt');
  });
});

describe('BlogImage should handle broken images', () => {
  it('Missing image path should default image src', () => {
    const blogImage = shallow(<BlogImage altText='this is default' />);
    expect(blogImage.find('img').at(0).props().src).toEqual(DEFAULT_IMG_URL);
    expect(blogImage.find('img').at(0).props().alt).toEqual('this is default');
  });
});