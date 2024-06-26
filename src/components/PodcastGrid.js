import React, { useState } from 'react'
import { PodcastCardList } from './PodcastCardList'


const filterPodcasts = ({podcastList, search}) =>  {
    
    if(!search){
        return podcastList
    }

    search = search.toLowerCase()
    return podcastList.filter( (podcaster) => {
        const author = podcaster.author.toLowerCase()
        const title = podcaster.title.toLowerCase()
        return author.includes(search) || title.includes(search)
    })
}


export const PodcastGrid = ({ podcastList, is_loading }) => {

    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    podcastList = filterPodcasts({podcastList, search})
    let podcastListLen = podcastList.length

    return (

        <div className=''>
            <div className='justify-center mr-0 sm:mr-20 md:mr-20 xl:mr-20 sm:justify-center md:justify-start xl:justify-start flex flex-row-reverse mt-5'>
                {is_loading && <div className='ml-10'>loading...</div>}
                <input type="text" name="Filter" placeholder='Filter podcasts....' className='border border-gray-400 rounded-md pl-2' value={search} onChange={handleInputChange} />
                <div className='mx-2 bg-sky-800 rounded-lg w-10 h-5 flex mt-0.5 items-center justify-center text-white'>{podcastListLen}</div>
            </div>

            <div className='flex item-center justify-center h-screen p-20 sm:px-30 md:px-40 lg:px-48'>

                <div className='grid gap-y-28 gap-x-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>

                    {
                        podcastList.map(podcast => (
                            <PodcastCardList key={podcast.id} {...podcast} /> 
                        ))
                    }

                </div>
            </div>
        </div>


    )
}
