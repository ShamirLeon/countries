import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const NoSearch = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-search-off"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584-2.434a7 7 0 0 0-9.038-9.057M3 3l18 18" />
    </svg>
  )
  export default NoSearch