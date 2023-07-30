import SVG, { Path } from "react-native-svg";

export function MenuIcon({ fill }: { fill?: string }) {
  return (
    <SVG width="16" height="10" viewBox="0 0 16 10" fill="none">
      <Path
        d="M0.5 0H15.5V1.67969H0.5V0ZM0.5 5.82031V4.17969H15.5V5.82031H0.5ZM0.5 10V8.32031H15.5V10H0.5Z"
        fill={fill || "black"}
      />
    </SVG>
  );
}
