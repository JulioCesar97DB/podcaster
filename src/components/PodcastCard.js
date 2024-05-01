import React, { useState } from 'react'

const SUMMARY_MAX_LENGTH = 150;

const collapseText = (summary, max_length) => {
    summary = summary.slice(0, SUMMARY_MAX_LENGTH)
    summary += "..."
    return summary
}

export const PodcastCard = ({ img, author, title, summary }) => {

    const [seeMoreDescription, setSeeMoreDescription] = useState(false)
    
    const summaryIsTooLong = summary.length > SUMMARY_MAX_LENGTH
    if(summaryIsTooLong && !seeMoreDescription){
        summary = collapseText(summary, SUMMARY_MAX_LENGTH)
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
                    {summary} 
                <button className='text-blue-400' onClick={() => setSeeMoreDescription(!seeMoreDescription)} hidden={!summaryIsTooLong}> 
                    { seeMoreDescription?"see less": "see more" }
                </button>
                </p>
            </div>

        </div>
    )
}
