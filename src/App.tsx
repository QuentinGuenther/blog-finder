import React from 'react';
import { BlogCard } from './components/blog-card/BlogCard';
import { Pill } from './components/pill/Pill';

const App: React.FC = () => {
  return (
    <>
      <Pill clickHandler={(event: React.MouseEvent<HTMLButtonElement>) => alert('closed')} label='sub' />
      <BlogCard
        imgPath="https://b.thumbs.redditmedia.com/ZeHIfttfHHKwSTV3j87WqzzU6yMeCgm9gDTCcAKurIM.jpg"
        altText="A comprehensive list of … ES2017, ES2018, ES2019"
        title="A comprehensive list of … ES2017, ES2018, ES2019"
        domain="github.com"
        comments={3}
        votes={48}
        redditLink=	"https://reddit.com/r/webdev/comments/d8mj5o/a_comprehensive_list_of_new_es_features_including/"
        blogLink=	"https://github.com/daumann/ECMAScript-new-features-list"
      />
    </>
  );
}

export default App;
