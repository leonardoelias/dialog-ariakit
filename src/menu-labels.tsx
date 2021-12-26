import React, { useState } from "react";
import {
  ComboboxItem,
  ComboboxList,
  useComboboxState,
  MenuButton,
  MenuItem,
  Menu,
  useMenuState
} from "ariakit";
import * as Icon from "./icon";

type Priority = "Feature" | "Bug" | "Improvement" | "EmptyLabel";
const priority: Array<Priority> = [
  "Bug",
  "Feature",
  "Improvement",
  "EmptyLabel"
];

const IconButton: Record<Priority, React.ReactNode> = {
  EmptyLabel: <Icon.Label />,
  Feature: <div className="w-3 h-3 bg-purple-400 rounded-full" />,
  Bug: <div className="w-3 h-3 bg-red-400 rounded-full" />,
  Improvement: <div className="w-3 h-3 bg-yellow-400 rounded-full" />
};

export function MenuLabel() {
  const combobox = useComboboxState({
    defaultList: [...priority]
  });
  const menu = useMenuState(combobox);
  const [state, setState] = useState<Priority>("Improvement");

  return (
    <>
      <MenuButton
        state={menu}
        className="flex items-center gap-2 bg-gray-100 px-1.5 py-0.5 text-gray-600 rounded text-sm font-light"
      >
        {IconButton[state]}
        {state}
      </MenuButton>
      <Menu state={menu} portal composite={false}>
        <ComboboxList state={combobox}>
          {combobox.matches.length
            ? combobox.matches.map((value, i) => (
                <ComboboxItem
                  as={MenuItem}
                  setValueOnClick={false}
                  key={value}
                  value={value}
                  // @ts-ignore
                  onClick={() => setState(value)}
                  className="flex gap-2"
                >
                  {/* @ts-ignore */}
                  {IconButton[value]}
                  {value}
                </ComboboxItem>
              ))
            : "No results"}
        </ComboboxList>
      </Menu>
    </>
  );
}
