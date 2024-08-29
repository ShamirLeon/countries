import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const WhirlIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-whirl"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
      <path d="M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10" />
      <path d="M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12" />
      <path d="M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3" />
      <path d="M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12" />
    </svg>
  )
  export default WhirlIcon