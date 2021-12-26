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

type Status = "Empty" | "Ariakit";
const status: Array<Status> = ["Empty", "Ariakit"];

const IconButton: Record<Status, React.ReactNode> = {
  Empty: <Icon.AssignEmpty />,
  Ariakit: (
    <div
      style={{ fontSize: 8 }}
      className="bg-yellow-200 rounded-full w-4 h-4 overflow-hidden flex items-center justify-center text-gray-400"
    >
      AK
    </div>
  )
};

export function MenuAssign() {
  const combobox = useComboboxState({
    defaultList: [...status]
  });
  const menu = useMenuState(combobox);
  const [state, setState] = useState<Status>("Empty");

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
        <Combobox state={combobox} placeholder="Set status..." autoSelect />
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
