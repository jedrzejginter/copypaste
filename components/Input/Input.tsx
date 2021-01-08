import {forwardRef, InputHTMLAttributes, Ref} from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

function Input(props: Props, ref: Ref<HTMLInputElement>) {
  return <input {...props} ref={ref} />;
}

export default forwardRef(Input);
