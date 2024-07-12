import { HoverEffect } from '../../ui/card-hover-effect'
import { benefits } from '@/lib/constants'

const HomeBenifits = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-10 justify-center items-center md:pb-20 p-4">
    <div className="flex flex-col gap-4 items-center text-center justify-center">
      <p className="text-4xl md:text-6xl font-bold">Why choose it?</p>
      <p className="font-semibold text-gray-800">
        Beacuse we provide the following
      </p>
    </div>
    <div className="max-w-5xl mx-auto  md:px-8">
      <HoverEffect items={benefits} />
    </div>
  </div>
  )
}

export default HomeBenifits