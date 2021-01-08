import {forwardRef} from 'react';

function Checkbox({checked, ...props}, ref) {
  return <input {...props} aria-checked={checked} checked={checked} type="checkbox" ref={ref} />;
}

export default forwardRef(Checkbox);
