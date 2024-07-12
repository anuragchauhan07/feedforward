import Link from "next/link"

const PromoteButton = () => {
  return (
    <Link
    href="/"
    className="hover:underline text-sm w-full text-center flex items-center justify-center mt-4 font-semibold"
  >
    Created using Feedback
  </Link>
  )
}

export default PromoteButton