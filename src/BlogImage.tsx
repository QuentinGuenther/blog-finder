import React, {useState} from 'react';

export const DEFAULT_IMG_URL = 'default image path';

export interface BlogImageProps {
  imgPath?: string,
  altText: string
}

export function BlogImage (props: BlogImageProps) {
  const src = (props.imgPath) ? props.imgPath : DEFAULT_IMG_URL;

  return (
    <img src={src} alt={props.altText}/>
  );
}
