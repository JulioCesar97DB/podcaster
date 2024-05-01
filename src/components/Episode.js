import React from 'react'
import { PodcastCard } from './PodcastCard'
import { useLocation } from 'react-router-dom'
import { Description } from './Description'


export const Episode = () => {
    
    const {state:{summary, title, img, author, track}} = useLocation();

    return (
        <div className='flex'>
            <div>
                <PodcastCard img={img} author={author} title={title} summary={summary} />
            </div>

            <div className='flex flex-col p-4 h-min mt-10 mr-20 shadow-md shadow-slate-500'>
                <div className='font-bold text-2xl'>{track.title}</div>
                <div className='italic mb-2'> <Description text={track.description} maxLength={800}/>  </div>

                <hr />

                <audio className='border-none mt-4 min-w-full max-h-10' controls name='media'>
                    <source type='audio/mpeg' src={track.episodeUrl} />
                </audio>
            </div>

        </div>
    )
}
