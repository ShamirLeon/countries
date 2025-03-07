import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const ArrowLeftIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 12h14M5 12l6 6M5 12l6-6" />
    </svg>
  )
  export default ArrowLeftIcon