import React from 'react'
import { Description } from './Description';


export const PodcastCard = ({ img, author, title, summary }) => {

    return (
        <div className='mx-20 mt-10 w-64 flex flex-col shadow-md shadow-slate-500 '>
            <img src={img} alt="Podcast Cover" className='px-10 py-5 rounded rounded-sm]' />
            
            <div className='p-2'>
                <hr />
                <p className='m-5 italic'><span className='font-bold text-xl not-italic'>{title} </span><br />
                    by {author}
                </p>
                <hr />
                <Description text={summary} maxLength={150}/>
            </div>

        </div>
    )
}
