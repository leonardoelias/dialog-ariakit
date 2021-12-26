import {
  Button as ButtonAriaKit,
  ButtonProps as ButtonAriakitProps
} from "ariakit/button";
import React from "react";

type ButtonProps = ButtonAriakitProps & {
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <ButtonAriaKit
      className="flex items-center gap-2 bg-gray-200 px-1.5 py-0.5 text-gray-400 rounded text-sm"
      {...props}
    >
      {children}
    </ButtonAriaKit>
  );
}
