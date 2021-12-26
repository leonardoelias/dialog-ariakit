import {
  Dialog,
  useDialogState,
  DialogDisclosure,
  DialogHeading,
  DialogDismiss
} from "ariakit/dialog";
import { Button } from "ariakit/button";
import { FiEdit } from "react-icons/fi";
import { HiOutlineUsers, HiOutlinePaperClip } from "react-icons/hi";
import { MenuStatus } from "./menu-status";
import { MenuPriority } from "./menu-priority";
import { MenuAssign } from "./menu-assign";
import { MenuLabel } from "./menu-labels";
import { Switch } from "./switch";

import "./styles.css";

const backdropProps = {
  className: "w-screen h-screen bg-black/[.20] flex justify-center items-center"
};

export default function App() {
  const dialog = useDialogState({ defaultVisible: true });

  return (
    <>
      <div className="h-screen w-full bg-gray-50 flex items-center justify-center">
        <div>
          <DialogDisclosure state={dialog}>
            <button className="border border-gray-300 px-3 py-1 rounded shadow-sm shadow-slate-300/50 flex items-center text-sm gap-2 text-slate-600 hover:bg-slate-100">
              <FiEdit />
              New issue
            </button>
          </DialogDisclosure>
        </div>
      </div>

      <Dialog
        state={dialog}
        backdropProps={backdropProps}
        className="w-[700px] bg-white shadow-lg shadow-white/10 rounded-md flex flex-col gap-3 drop-shadow-2xl text-gray-500"
      >
        <header className="w-full px-3 pb-1 pt-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2 font-light">
            <button className="flex items-center gap-2 bg-gray-200 px-1.5 py-0.5 text-gray-400 rounded">
              <HiOutlineUsers />
              ARIAKIT
            </button>
            <span className="text-lg">›</span>
            <span>
              <DialogHeading className="oi">New Issue</DialogHeading>
            </span>
          </div>
          <div>
            <DialogDismiss />
          </div>
        </header>
        <main className="px-3 pb-2 gap-3 flex flex-col">
          <div className="flex flex-1">
            <textarea
              placeholder="Issue title"
              maxLength={512}
              className="flex-1 text-xl h-[30px] resize-none break-words font-medium"
            />
          </div>
          <div className="flex flex-1">
            <textarea
              placeholder="Add Description"
              className="flex-1 text h-[30px] resize-none break-words"
            />
          </div>
          <div className="flex gap-2">
            <MenuStatus />
            <MenuPriority />
            <MenuAssign />
            <MenuLabel />
          </div>
        </main>
        <footer className="flex flex-1 items-center justify-between border-t px-3 py-2">
          <div>
            <Button className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700">
              <HiOutlinePaperClip />
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <Switch />
            <Button className="px-4 py-2 text-sm bg-indigo-400 text-white rounded shadow-sm hover:bg-indigo-500">
              Save issue
            </Button>
          </div>
        </footer>
      </Dialog>
    </>
  );
}
