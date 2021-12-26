import { Checkbox, useCheckboxState } from "ariakit/checkbox";

const itemClass = `group bg-gray-300 hover:bg-gray-400 relative inline-flex flex-shrink-0 h-[14px] w-[24px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`;
const thumbClass = `checked:translate-x-5 unchecked:translate-x-0 pointer-events-none inline-block h-[10px] w-[10px] rounded-full bg-gray-100 shadow-lg transform ring-0 transition ease-in-out duration-200`;

export function Switch() {
  const checkbox = useCheckboxState({ defaultValue: true });

  return (
    <label className="flex gap-2 items-center text-xs">
      <div
        className={itemClass}
        onClick={() => checkbox.setValue(!checkbox.value)}
      >
        <Checkbox state={checkbox} as="div" className={thumbClass} />
      </div>
      Create More
    </label>
  );
}
