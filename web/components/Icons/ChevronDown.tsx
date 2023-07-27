export function ChevronDownIcon(props: {
  className?: string;
  width?: string | number;
  height?: string | number;
}) {
  return (
    <svg
      width={props.width || "1em"}
      height={props.height || "1em"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          d="M8 7.91336L7.06 7L4 9.9668L0.94 7L0 7.91336L4 11.8L8 7.91336Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
