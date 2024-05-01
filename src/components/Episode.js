import React from 'react'
import { PodcastCard } from './PodcastCard'
import { useLocation } from 'react-router-dom'

export const Episode = () => {
    
    const {state:{summary, title, img, author, track}} = useLocation();

    return (
        <div className='flex'>
            <div>
                <PodcastCard img={img} author={author} title={title} summary={summary} />
            </div>

            <div className='flex flex-col p-4 h-min mt-10 mr-20 shadow-md shadow-slate-500'>
                <div className='font-bold text-2xl'>{track.title}</div>
                <div className='italic mb-2'>{track.description}</div>
                {/* TODO: <div className='flex italic font-medium mb-4'>{track.shortDescription}</div> */}

                <hr />

                <audio className='border-none mt-4 min-w-full max-h-10' controls name='media'>
                    <source type='audio/mpeg' src={track.episodeUrl} />
                </audio>
            </div>

        </div>
    )
}
