import {forwardRef, InputHTMLAttributes, Ref} from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

function Checkbox({checked, ...props}: Props, ref: Ref<HTMLInputElement>) {
  return <input {...props} aria-checked={checked} checked={checked} type="checkbox" ref={ref} />;
}

export default forwardRef(Checkbox);
