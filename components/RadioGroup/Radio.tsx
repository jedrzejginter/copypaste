import {ComponentPropsWithoutRef} from 'react';

interface Props extends ComponentPropsWithoutRef<'input'> {
  value: string;
};

export type RadioProps = Props;

export default function Radio({checked,...props}: Props) {
  return (
    <input
      {...props}
      aria-checked={checked}
      checked={checked}
      type="radio"
    />
  )
}
