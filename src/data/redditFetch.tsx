import axios from 'axios';

interface SubredditData {
  subreddit: string
}

interface SubredditList {
  subredditList: Array<SubredditData>
}

interface PostData {
  imgPath: string,
  altText: string,
  title: string,
  domain: string,
  comments: number,
  votes: number,
  redditLink: string,
  blogLink: string
}

function filter(response: Array<any>): Array<any> {
  // TODO: given an array of posts, filter off all posts that do not match our criteria

  return [];
}

function lighten(post: any): PostData {
  // TODO: Given a post create a new object and copy over necessary posts

  return {
    imgPath: '',
    altText: '',
    title: '',
    domain: '',
    comments: 0,
    votes: 0,
    redditLink: '',
    blogLink: ''
  };
}

export function fetchDataFromSubreddits(options: SubredditList): Array<PostData> {
  // TODO: For a given list of subreddits, return a list of all non-self posts

  // TODO: filter the list and lighten the load

  return [];
}

export function fetchReddit(options: SubredditData): Array<any> {
  axios.get('https://www.reddit.com/r/' + options.subreddit + '.json')
    .then ((res: any) => {
      const posts = res.data.data.children.filter((e: any) => {
        return e.data.domain !== ('self.' + options.subreddit);
      })
    });
  
  return [];
}