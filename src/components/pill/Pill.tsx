import * as React from 'react';

export interface PillProps {
  label: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Pill (props: PillProps) {
  return (
    <div>
      <button onClick={props.clickHandler}>X</button>
      <p>{props.label}</p>
    </div>
  );
}
