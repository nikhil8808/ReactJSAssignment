import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import HeadingComponent from '../components/HeadingComponent'


const Homepage = () => {

    const navigate=useNavigate()
    return (
        <div className='w-full h-screen relative flex justify-center bg-gray-300 '>
            <div className='absolute bottom-0 w-full flex justify-center  h-full items-end'>
                      <div className=' px-[1.3rem] h-full bg-white    py-12 w-full md:w-[40%] flex justify-end flex-col gap-4  text-start'>
                <HeadingComponent 
                heading={"Welcome to PopX"}
                subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}

                />
          
                <div className='flex flex-col gap-[0.7rem]'>
                    <Button
                        title={"Create Account"}
                        variant='primary'
                        handleClick={()=>{
                            navigate('sign-up')
                        }}
                        type="button"
                        isLoading={false}

                    />
                    <Button
                        title={"Already Registered? Login"}
                        variant='secondary'
                            handleClick={()=>{
                            navigate('sign-in')
                        }}
                         type="button"
                          isLoading={false}
                    />
               
                
                </div>


            </div>

            </div>
      

        </div>
    )
}

export default Homepage