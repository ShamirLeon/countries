import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const MoonIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-moon"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006-.06-.002z" />
    </svg>
  )
  export default MoonIcon