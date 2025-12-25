import type { ButtonProps } from '../types'

const Button = ({
    title,
    type,
    variant,
    handleClick,
    isLoading
}: ButtonProps) => {
     
  const getVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-[#6C25FF] text-white"

    case "secondary":
      return "bg-[#6C25FF4B] text-black"
  }
}
       
   
    if (type === "submit") {
      return (
        <button
          disabled={isLoading}
          type={type}
          className={`w-full font-semibold font-rubik h-11.5 rounded-md ${getVariant(variant as string)} `}
        >
          {isLoading ? "Submitting..." : title}
        </button>
      )
    }

    return (
      <button
        disabled={isLoading}
        type={type}
        onClick={handleClick}
        className={`w-full font-semibold font-rubik h-11.5 rounded-md ${getVariant(variant as string)} `}
      >
        {isLoading ? "Loading..." : title}
      </button>
    )
}

export default Button