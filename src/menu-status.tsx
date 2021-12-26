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

type Status = "Backlog" | "Todo" | "In Progress" | "Done" | "Canceled";
const status: Array<Status> = [
  "Backlog",
  "Todo",
  "In Progress",
  "Done",
  "Canceled"
];

const IconButton: Record<Status, React.ReactNode> = {
  Backlog: <Icon.Backlog />,
  Todo: <Icon.Todo />,
  "In Progress": <Icon.InProgress />,
  Done: <Icon.Done />,
  Canceled: <Icon.Cancelled />
};

export function MenuStatus() {
  const combobox = useComboboxState({
    defaultList: [...status]
  });
  const menu = useMenuState(combobox);
  const [state, setState] = useState<Status>("Todo");

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
