
export type CategoryProps = {
    categoryName: string;
    items: string[];
}

export type PricingPlanProps = {
    className?: string;
    image?: string;
    title?: string;
    price?: JSX.Element;
    categories: CategoryProps[]
    button?: JSX.Element;
    color?: string;
    onClick?: () => void;
} 

export default function CardPricingPlan({ className, image, title, price, button, categories, color, onClick } : PricingPlanProps ) {


  return (
    <div role="button" onClick={onClick} className={`shadow-xl rounded-[1rem] min-h-[550px] w-96 bg-gradient-to-b from-[rgb(255,255,255,.9)] to-[rgb(255,255,255,.6)] backdrop-blur-md ${className}`} >
        <div key={color} 
        style={{ 
            backgroundImage: `linear-gradient(to bottom, color-mix(in srgb, ${color} 80%, black), color-mix(in srgb, ${color} 40%, black))`
        }}
        className={`w-full shadow-2xl rounded-xl rounded-b-[50%] h-56 flex flex-col items-center justify-center`}> 
            <img className='w-24 h-24 object-cover rounded-full shadow-md shadow-black' src={image} alt='adicionais'/>
            <h2 className="text-gray-100 font-thin text-4xl p-2 text-center" >
                {title}
            </h2>
        </div>
        {price}
        <br/>
        {categories.map(({categoryName, items}) => <div className='w-full text-center pt-2'>
            <h5 key={categoryName} className="text-gray-700 font-bold">
                {categoryName}
            </h5>
            <p className='font-bold text-gray-500 text-sm px-4'>
                {items.join(', ')}
            </p>
        <br/>

        </div>)}
        {button}
    </div>
  )
}


CardPricingPlan.defaultProps = {
    className: undefined
}