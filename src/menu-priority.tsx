import React, { useState } from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  useComboboxState,
  MenuButton,
  MenuItem,
  Menu,
  useMenuState
} from "ariakit";
import * as Icon from "./icon";

type Priority = "No Priority" | "Urgent" | "High" | "Medium" | "Low";
const priority: Array<Priority> = [
  "No Priority",
  "Urgent",
  "High",
  "Medium",
  "Low"
];

const IconButton: Record<Priority, React.ReactNode> = {
  "No Priority": <Icon.NoPriority />,
  Urgent: <Icon.Urgent />,
  High: <Icon.High />,
  Medium: <Icon.Medium />,
  Low: <Icon.Low />
};

export function MenuPriority() {
  const combobox = useComboboxState({
    defaultList: [...priority]
  });
  const menu = useMenuState(combobox);
  const [state, setState] = useState<Priority>("No Priority");

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
