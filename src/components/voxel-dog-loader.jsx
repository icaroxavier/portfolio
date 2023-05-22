import { forwardRef } from 'react'

export const DogSpinner = () => (
  <div className='h-12 w-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin'/>
)

export const DogContainer = forwardRef(function dog({ children }, ref) {
  return(
    <div
      ref={ref}
      position="relative"
      className="
        relative mx-auto
        h-0 w-full pb-[calc(100%)] -mb-24 -mt-12
        md:w-[calc(40rem)] md:h-[calc(40rem)] md:-mt-36 md:-mb-48 md:pb-0"
    >
      {children}
    </div>
)})

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
