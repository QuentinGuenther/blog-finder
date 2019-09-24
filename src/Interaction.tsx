import * as React from 'react';

export interface InteractionProps {
  comments: number;
  votes: number;
}

export function Interaction (props: InteractionProps) {
  return (
    <div>
      <div className="comments">{props.comments}</div>
      <div className="vote">{props.votes}</div>
    </div>
  );
}
