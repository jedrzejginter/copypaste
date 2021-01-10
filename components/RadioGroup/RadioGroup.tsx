import {ChangeEvent, createContext, PropsWithChildren, useContext} from 'react';

import Radio, {RadioProps} from './Radio';

type Props = PropsWithChildren<{
  name: string;
  currentValue: string | null;
  onChangeValue: (newValue: string) => any;
}>;

type DefaultValue = {
  name: string;
  currentValue: string | null;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => any;
};

const Ctx = createContext<DefaultValue>({
  name: '',
  currentValue: null,
  onChange: () => {},
});

export default function RadioGroup({currentValue, name, onChangeValue, ...props}: Props) {
  return (
    <Ctx.Provider
      {...props}
      value={{
        name,
        currentValue,
        onChange: (evt) => onChangeValue(evt.target.value)
      }}
    />
  )
}

function RadioWithContext({value, ...props}: RadioProps) {
  const {name, currentValue, onChange} = useContext(Ctx)

  return (
    <Radio
      {...props}
      checked={currentValue === value}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

RadioGroup.Radio = RadioWithContext;
