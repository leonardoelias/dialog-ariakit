import * as React from "react";

export const Backlog = () => (
  <svg width={14} height={14}>
    <path
      d="m13.94 7.914-1.982-.258a5.06 5.06 0 0 0 0-1.312l1.983-.258a7.054 7.054 0 0 1 0 1.828ZM13.47 4.32a6.995 6.995 0 0 0-.915-1.581l-1.586 1.218c.265.345.485.724.653 1.13l1.848-.767Zm-2.207-2.874-1.22 1.586a4.991 4.991 0 0 0-1.129-.653L9.68.53c.569.236 1.1.545 1.582.915ZM7.913.06l-.258 1.983a5.064 5.064 0 0 0-1.312 0L6.086.06a7.066 7.066 0 0 1 1.828 0ZM4.32.531l.767 1.848a4.993 4.993 0 0 0-1.13.653L2.74 1.446A6.993 6.993 0 0 1 4.32.531ZM1.446 2.74l1.586 1.218a4.993 4.993 0 0 0-.653 1.13L.53 4.32c.236-.569.545-1.1.915-1.581ZM.06 6.086a7.066 7.066 0 0 0 0 1.828l1.983-.258a5.064 5.064 0 0 1 0-1.312L.06 6.086ZM.531 9.68l1.848-.767c.168.406.388.785.653 1.13l-1.586 1.219A6.993 6.993 0 0 1 .531 9.68Zm2.208 2.874 1.218-1.586c.345.265.724.485 1.13.653L4.32 13.47a6.995 6.995 0 0 1-1.581-.915Zm3.347 1.387.258-1.983a5.06 5.06 0 0 0 1.312 0l.258 1.983a7.054 7.054 0 0 1-1.828 0Zm3.594-.472-.767-1.848a4.994 4.994 0 0 0 1.13-.653l1.219 1.586a6.995 6.995 0 0 1-1.582.915Zm2.874-2.207-1.586-1.22c.265-.344.485-.723.653-1.129l1.848.767c-.236.569-.545 1.1-.915 1.582Z"
      fill="#bec2c8"
    />
  </svg>
);

export const Todo = () => (
  <svg width={14} height={14} fill="none">
    <rect
      x={1}
      y={1}
      width={12}
      height={12}
      rx={6}
      stroke="#e2e2e2"
      strokeWidth={2}
    />
    <path fill="#e2e2e2" d="M7 7V3.5z" />
  </svg>
);

export const InProgress = () => (
  <svg width={14} height={14} fill="none">
    <rect
      x={1}
      y={1}
      width={12}
      height={12}
      rx={6}
      stroke="#f2c94c"
      strokeWidth={2}
    />
    <path fill="#f2c94c" d="M7 7V3.5a3.5 3.5 0 0 1 0 7z" />
  </svg>
);

export const Done = () => (
  <svg width={14} height={14}>
    <path
      fill="#5e6ad2"
      stroke="#5e6ad2"
      d="M9.545 3.545 9.9 3.9l-.354-.354L5.5 7.591 4.455 6.545a1.35 1.35 0 1 0-1.91 1.91l2 2a1.35 1.35 0 0 0 1.91 0l5-5a1.35 1.35 0 0 0 0-1.91L11.1 3.9l.354-.354a1.35 1.35 0 0 0-1.91 0ZM.5 7a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
    />
  </svg>
);

export const Cancelled = () => (
  <svg width={14} height={14}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.03 3.97a.75.75 0 0 0-1.06 1.06L5.94 7 3.97 8.97a.75.75 0 1 0 1.06 1.06L7 8.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L8.06 7l1.97-1.97a.75.75 0 1 0-1.06-1.06L7 5.94 5.03 3.97Z"
      fill="#95a2b3"
    />
  </svg>
);

export const NoPriority = () => (
  <svg fill="#6B6F76" width={16} height={16} viewBox="0 0 14 14">
    <rect width={2} height={2} rx={1} transform="matrix(-1 0 0 1 5 6)" />
    <rect width={2} height={2} rx={1} transform="matrix(-1 0 0 1 8 6)" />
    <rect width={2} height={2} rx={1} transform="matrix(-1 0 0 1 11 6)" />
  </svg>
);

export const Urgent = () => (
  <svg width={16} height={16} viewBox="-1 -1 16 16" fill="#6B6F76">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.914 3h1.738L7.5 8.602H6.07L5.914 3zm1.809 7.164a.95.95 0 0 1-.938.938.934.934 0 1 1 0-1.867c.5 0 .934.417.938.93z"
    />
  </svg>
);

export const High = () => (
  <svg fill="#6B6F76" width={16} height={16}>
    <rect x={1} y={8} width={3} height={6} rx={1} />
    <rect x={6} y={5} width={3} height={9} rx={1} />
    <rect x={11} y={2} width={3} height={12} rx={1} />
  </svg>
);

export const Medium = () => (
  <svg fill="#6B6F76" width={16} height={16}>
    <rect x={1} y={8} width={3} height={6} rx={1} />
    <rect x={6} y={5} width={3} height={9} rx={1} />
    <rect x={11} y={2} width={3} height={12} rx={1} fillOpacity={0.4} />
  </svg>
);

export const Low = () => (
  <svg fill="#6B6F76" width={16} height={16}>
    <rect x={1} y={8} width={3} height={6} rx={1} />
    <rect x={6} y={5} width={3} height={9} rx={1} fillOpacity={0.4} />
    <rect x={11} y={2} width={3} height={12} rx={1} fillOpacity={0.4} />
  </svg>
);

export const AssignEmpty = () => (
  <svg width={16} height={16}>
    <path
      d="M8 4a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2Z"
      fill="#6B6F76"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-2.879-4.121-1.01 1.01a5.5 5.5 0 1 1 7.778 0l-1.01-1.01A3 3 0 0 0 8.757 10H7.243a3 3 0 0 0-2.122.879Z"
      fill="#6B6F76"
    />
  </svg>
);

export const Label = () => (
  <svg width={16} height={16} fill="#6B6F76">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.21 4c.424 0 .803.189 1.03.48L14 8l-2.76 3.52c-.227.291-.606.48-1.03.48l-6.947-.006c-.695 0-1.263-.508-1.263-1.137V5.143c0-.629.568-1.137 1.263-1.137L10.21 4Zm.915 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
