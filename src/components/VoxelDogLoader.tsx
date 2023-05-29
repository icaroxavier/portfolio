import { forwardRef } from 'react'

export const DogSpinner = () => (
  <div
    className="
    inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]
    motion-reduce:animate-[spin_1.5s_linear_infinite]
    absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)]"
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div>
)

interface DogContainerProps {
  children: React.ReactNode
}

export const DogContainer = forwardRef<HTMLDivElement, DogContainerProps>(function dog({ children }, ref) {
  return(
    <div
      ref={ref}
      className="
        relative mx-auto
        h-0 w-full pb-[calc(100%)] -mb-24
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
