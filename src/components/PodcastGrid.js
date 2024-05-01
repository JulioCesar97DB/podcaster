import React, { useState } from 'react'
import { PodcastCardList } from './PodcastCardList'


export const PodcastGrid = ({ podcastList, loading }) => {

    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value)
    }

    let podcast_list = podcastList;

    if (search !== "") {
        const lowerSearch = search.toLowerCase()
        podcast_list = podcastList.filter(obj => obj.author.toLowerCase().includes(lowerSearch) || obj.title.toLowerCase().includes(lowerSearch))
    }

    let podcast_list_len = podcast_list.length

    return (

        <div className='flex flex-col'>
            <div className='mr-60 flex flex-row-reverse mt-5'>
                {loading && <div className='ml-10'>loading...</div>}
                <input type="text" name="Filter" placeholder='Filter podcasts....' className='border border-gray-400 rounded-md pl-2' value={search} onChange={handleInputChange} />
                <div className='mx-2 bg-sky-800 rounded-lg w-10 h-5 flex mt-0.5 items-center justify-center text-white'>{podcast_list_len}</div>
            </div>

            <div className='grid gap-28 md:grid-cols-4 sm:grid-cols-2 sm:mx-40  md:justify-items-center place-content-evenly md:mx-60 my-20'>



                {
                    podcast_list.map(podcast => (
                        <PodcastCardList key={podcast.id} {...podcast} />
                    ))
                }

            </div>
        </div>


    )
}
