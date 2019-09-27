import { fetchReddit, fetchDataFromSubreddits, filter, lighten } from './redditFetch';

describe('filter', () => {
  it('filter method should filter posts that have a domain starting with self.', () => {
    const posts = [{
      domain: 'self.subreddit'
    },
    {
      domain: 'medium.com'
    },
    {
      domain: 'notself.'
    }];

    expect(filter(posts)).toEqual([{domain: 'medium.com'}, {domain: 'notself.'}]);
  });
});

describe('lighten', () => {
  it('should return default values if they do not exist', () => {
    const post = {};

    expect(lighten(post)).toEqual({
      imgPath: '',
      altText: '',
      title: '',
      domain: '',
      comments: 0,
      votes: 0,
      redditLink: '',
      blogLink: ''
    });
  });

  it('should remove unneeded fields', () => {
    const post = {
      imgPath: 'ghk',
      altText: 'vg',
      title: 'ghv',
      domain: 'vghj',
      extraField: 'jhv',
      comments: 9,
      votes: 5,
      redditLink: 'uv',
      blogLink: 'jhgv'
    };

    expect(lighten(post)).toEqual({
      imgPath: 'ghk',
      altText: 'vg',
      title: 'ghv',
      domain: 'vghj',
      comments: 9,
      votes: 5,
      redditLink: 'uv',
      blogLink: 'jhgv'
    });
  });

  it('should return existing values', () => {
    const post = {
      imgPath: 'ghk',
      altText: 'vg',
      title: 'ghv',
      domain: 'vghj',
      comments: 9,
      votes: 5,
      redditLink: 'uv',
      blogLink: 'jhgv'
    };

    expect(lighten(post)).toEqual({
      imgPath: 'ghk',
      altText: 'vg',
      title: 'ghv',
      domain: 'vghj',
      comments: 9,
      votes: 5,
      redditLink: 'uv',
      blogLink: 'jhgv'
    });
  });
});