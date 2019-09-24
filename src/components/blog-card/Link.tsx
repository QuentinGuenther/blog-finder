import * as React from 'react';

export interface LinkProps {
  page?: string;
  children: string;
}

export function Link (props: LinkProps) {
  return (
    <a 
      href={props.page || '#'}
    >
      {props.children}
    </a>
  );
}
