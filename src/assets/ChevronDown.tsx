import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const ChevronDownIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
  export default ChevronDownIcon