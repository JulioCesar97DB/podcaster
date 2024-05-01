import React, { useState } from 'react'

export const PodcastCard = ({ img, author, title, summary }) => {

    const [seeMoreDescription, setSeeMoreDescription] = useState(false)


    let description = summary.slice(0, 150);
    if(seeMoreDescription){
       description = summary 
    }

    return (
        <div className='mx-20 mt-10 w-64 flex flex-col shadow-md shadow-slate-500 '>
            <img src={img} alt="Podcast Cover" className='px-10 py-5 rounded rounded-sm]' />
            
            <div className='p-2'>
                <hr />
                <p className='m-5 italic'><span className='font-bold text-xl not-italic'>{title} </span><br />
                    by {author}
                </p>
                <hr />
                <p className='m-5 italic'><span className='font-bold text-xl not-italic'>Description: </span>
                    {description} <button className='text-blue-400' onClick={() => setSeeMoreDescription(!seeMoreDescription)} type='button'> {seeMoreDescription?"see less": "see more"}</button>
                </p>
            </div>

        </div>
    )
}
