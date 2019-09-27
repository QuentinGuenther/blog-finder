import axios from 'axios';

interface FetchRedditArgs {
  subreddit: string
}

export default function fetchReddit(options: FetchRedditArgs) {
  axios.get('https://www.reddit.com/r/' + options.subreddit + '.json')
    .then (res => {
      const posts = res.data.data.children.filter((e: any) => {
        return e.data.domain !== ('self.' + options.subreddit);
      })
    });
}