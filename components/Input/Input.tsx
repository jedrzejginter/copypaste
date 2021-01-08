import {forwardRef} from 'react';

function Input(props, ref) {
  return <input {...props} ref={ref} />;
}

export default forwardRef(Input);
