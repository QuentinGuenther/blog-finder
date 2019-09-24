import * as React from 'react';
import renderer from 'react-test-renderer';
import { Interaction } from './Interaction';

describe('Interaction should match snapshot', () => {
  it('Interaction should match snapshot', () => {
    const tree = renderer
      .create(<Interaction comments={75} votes={105000} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});