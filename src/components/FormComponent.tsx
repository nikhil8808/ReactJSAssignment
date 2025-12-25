import InputComponent from './InputComponent'
import HeadingComponent from './HeadingComponent'
import Button from './Button'
import type { FormComponentProps } from '../types'

const FormComponent = ({fields,
  heading,
  subHeading,
  btnTitle,
  formik,
  isLoading

}:FormComponentProps) => {



  return (
      <div className='w-full h-screen flex justify-center bg-gray-300'>
        {/* main container */}
        <form
          method='post'
          onSubmit={formik?.handleSubmit}
          className='md:w-[40%] flex flex-col w-full h-full px-[1.3rem] py-12 space-y-5 bg-[#F7F8F9]'>
            <HeadingComponent
              heading={heading}
              subheading={subHeading}
            />
            {fields?.length>0 && fields?.map((element:any,index:number)=>{
              return  <InputComponent 
              key={index}
            name={element?.name}
            label={element?.label}
            type={element?.type}
            placeholder={element?.placeholder}
            required={element?.required}
            options={element?.options}
            value={element?.value}
            handleChange={formik?.handleChange}
            error={element?.error}
            touched={element?.touched}

            />

            })}
        
      
        <Button 
          title={btnTitle}
          type="submit"
          variant={"primary"}
          isLoading={isLoading}
        />

        </form>
        
    </div>
  )
}

export default FormComponent