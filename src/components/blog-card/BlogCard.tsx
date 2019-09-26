import * as React from 'react';
import { BlogImage } from './BlogImage';
import { Interaction } from './Interaction';
import { Link } from './Link';

export interface BlogCardProps {
  imgPath: string,
  altText: string,
  title: string,
  domain: string,
  comments: number,
  votes: number,
  redditLink: string,
  blogLink: string
}

export function BlogCard (props: BlogCardProps) {
  return (
    <div>
      <BlogImage imgPath={props.imgPath} altText={props.altText} />
      <h2>{props.title}</h2>
      <a href={props.domain}>{props.domain}</a>
      <Interaction comments={props.comments} votes={props.votes} />
      <Link page={props.blogLink} children="Visit Page" />
      <Link page={props.redditLink} children="Comments" />
    </div>
  );
}
