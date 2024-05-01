import { useState } from "react"

const collapseText = (text, max_length) => {
    text = text.slice(0, max_length)
    text += "..."
    return text
}

export const Description = ({text, maxLength}) => {

    const [collpased, setCollapsed] = useState(false)
    
    const textIsTooLong = text.length > maxLength
    if(textIsTooLong && !collpased){
        text = collapseText(text, maxLength)
    }

    return <>
        <p className='m-5 italic break-words'><span className='font-bold text-xl not-italic '>Description: </span>
                {text} 
            <button className='text-blue-400' onClick={() => setCollapsed(!collpased)} hidden={!textIsTooLong}> 
                { collpased?"see less": "see more" }
            </button>
        </p>
    </>
}