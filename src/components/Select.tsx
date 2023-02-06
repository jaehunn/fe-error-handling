import {
  createContext,
  forwardRef,
  PropsWithChildren,
  Ref,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { css } from "@emotion/react";

import Button from "./Button";

import { CSSProp } from "~/styles/types";

type ContextValue = {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const DEFAULT_CONTEXT_VALUE: ContextValue = {
  value: "",
  onChange: () => {},
  isOpen: false,
  onOpenChange: () => {},
};

const SelectContext = createContext(DEFAULT_CONTEXT_VALUE);
const useSelectContext = () => useContext(SelectContext);

type SelectProps = PropsWithChildren<{
  css?: CSSProp;
  defaultValue?: string;
  defaultOpen?: boolean;
}>;

type SelectRef = HTMLDivElement & {
  value: string;
  onChangeValue: (value: string) => void;
  onOpenOptionList: () => void;
  onCloseOptionList: () => void;
};

const Select = forwardRef(function Select(
  { children, ...props }: SelectProps,
  forwardedRef: Ref<SelectRef>
) {
  const [value, setValue] = useState(props.defaultValue ?? "");
  const [open, setOpen] = useState(props.defaultOpen ?? false);

  useEffect(() => {
    setValue(props.defaultValue ?? "");
  }, [props.defaultValue]);

  useImperativeHandle(
    forwardedRef,
    () =>
      ({
        value,
        onChangeValue: (value: string) => setValue(value),
        onOpenOptionList: () => setOpen(true),
        onCloseOptionList: () => setOpen(false),
      } as SelectRef)
  );

  return (
    <SelectContext.Provider
      value={{
        value,
        onChange: setValue,
        isOpen: open,
        onOpenChange: setOpen,
      }}
    >
      <div ref={forwardedRef}>{children}</div>
    </SelectContext.Provider>
  );
});

type TriggerProps = PropsWithChildren<{
  css?: CSSProp;
  onClick?: () => void;
}>;

const Trigger = ({ children, onClick, ...props }: TriggerProps) => {
  const { value, isOpen, onOpenChange } = useSelectContext();

  return (
    <Button
      value={value}
      onClick={() => {
        onOpenChange(!isOpen);

        onClick?.();
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

type OptionListProps = PropsWithChildren<{
  css?: CSSProp;
}>;

const OptionList = ({ children, ...props }: OptionListProps) => {
  const { isOpen } = useSelectContext();

  return (
    <ul
      css={css`
        list-style: none;
      `}
      {...props}
    >
      {isOpen ? children : null}
    </ul>
  );
};

type OptionProps = PropsWithChildren<{
  css?: CSSProp;
  value: string;
  manual?: boolean;
  onClick?: () => void;
}>;

const Option = ({
  children,
  value,
  manual = false,
  onClick,
  ...props
}: OptionProps) => {
  const { value: selectValue, onChange } = useSelectContext();

  return (
    <li
      data-state={value === selectValue ? "selected" : "unselected"}
      onClick={() => {
        if (!manual) onChange(value);

        onClick?.();
      }}
      value={value}
      {...props}
    >
      {children}
    </li>
  );
};

export default Object.assign({}, Select, {
  Trigger,
  OptionList,
  Option,
});
