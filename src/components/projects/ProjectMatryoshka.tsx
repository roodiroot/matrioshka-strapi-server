import type { SVGProps } from "react";

// Векторный декор: цвет платка меняется независимо от лица и орнамента.
export default function ProjectMatryoshka({
  color = "#B7A0DB",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg viewBox="0 0 180 250" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M90 8c-33 0-54 25-54 57 0 20 8 33 5 43-5 18-27 46-27 79 0 38 28 55 76 55s76-17 76-55c0-33-22-61-27-79-3-10 5-23 5-43 0-32-21-57-54-57Z" fill={color} stroke="#050001" strokeWidth="3" />
      <path d="M90 117c-25 0-48 35-48 69 0 24 17 37 48 37s48-13 48-37c0-34-23-69-48-69Z" fill="#FBF5E9" stroke="#050001" strokeWidth="3" />
      <ellipse cx="90" cy="65" rx="35" ry="38" fill="#F8DEC0" stroke="#050001" strokeWidth="3" />
      <path d="M57 53c8-2 24-12 33-23 8 11 23 19 33 23" fill="#FACD22" stroke="#050001" strokeWidth="3" strokeLinejoin="round" />
      <path d="M72 65c3-4 7-4 10 0m16 0c3-4 7-4 10 0M82 83q8 8 16 0" stroke="#050001" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="69" cy="77" rx="6" ry="4" fill="#E99886" />
      <ellipse cx="111" cy="77" rx="6" ry="4" fill="#E99886" />
      <path d="m90 111-22-9 4 21 18-12 18 12 4-21-22 9Z" fill="#FACD22" stroke="#050001" strokeWidth="3" strokeLinejoin="round" />
      <path d="M90 204v-38m0 30c-18 0-26-8-27-18 17-1 26 6 27 18Zm0-11c17 0 24-8 25-18-16 0-24 7-25 18Z" fill="#90B730" stroke="#050001" strokeWidth="2.5" strokeLinejoin="round" />
      <g fill="#B7A0DB" stroke="#050001" strokeWidth="2">
        <ellipse cx="90" cy="145" rx="8" ry="12" />
        <ellipse cx="103" cy="155" rx="12" ry="8" transform="rotate(-25 103 155)" />
        <ellipse cx="98" cy="169" rx="8" ry="12" transform="rotate(-30 98 169)" />
        <ellipse cx="82" cy="169" rx="8" ry="12" transform="rotate(30 82 169)" />
        <ellipse cx="77" cy="155" rx="12" ry="8" transform="rotate(25 77 155)" />
      </g>
      <circle cx="90" cy="158" r="8" fill="#FACD22" stroke="#050001" strokeWidth="2" />
      <path d="m30 175 5 8-5 8-5-8 5-8Zm120 0 5 8-5 8-5-8 5-8Z" fill="#FBF5E9" />
    </svg>
  );
}
