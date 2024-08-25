import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const SearchIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-search"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
    </svg>
  )
  export default SearchIcon
  