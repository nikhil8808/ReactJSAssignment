import type { HeadingComponentProps } from '../types'

const HeadingComponent = ({heading,subheading}: HeadingComponentProps) => {
  return (
    <div className='flex flex-col gap-2 w-[65%] md:w-full '>
        <h4 className='font-rubik text-3xl  '>{heading}</h4>
        <p className='font-rubik text-md leading-tight text-[#1D2226]'>{subheading}</p>
    </div>
  )
}

export default HeadingComponent