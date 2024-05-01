import React, { useEffect, useRef, useState } from 'react'
import { PodcastCard } from './PodcastCard'
import { Link, useLocation, useParams } from 'react-router-dom';
import { getTracks } from "./../database/data"

export const PodcastDetail = () => {
    const { state: { summary, img, title, author } } = useLocation()

    const { podcastID } = useParams();

    const [tracks, setTracks] = useState([]);
    const loading = useRef(true)

    useEffect(() => {
        getTracks(podcastID).then(data => {
            loading.current = false
            setTracks(data)
        })
    }, [podcastID])

    return (
        <div className='flex'>
            
            <div>
                <PodcastCard img={img} author={author} title={title} summary={summary} />
            </div>

            <div className='flex flex-col max-h grow mr-20'>

                <div className='p-1 h-10 mt-10 shadow-md shadow-slate-500 font-bold text-xl'>
                    Episodes: {tracks.length}
                </div>

                <table className="mt-5 p-2 shadow-md shadow-slate-500 border w-full">
                    <thead>
                        <tr className='flex flex-row border'>
                            <th className='p-2 text-left basis-1/2'>Title</th>
                            <th className='p-2 text-left basis-1/4'>Date</th>
                            <th className='p-2 text-left basis-1/4'>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((track, index) => (
                            <Link key={track.id} to={`/podcast/${podcastID}/episode/${track.id}`} state={{ summary, title, img, author, track }}>
                                <tr className={index % 2 === 0 ? 'bg-white flex flex-row text-sky-700' : 'bg-gray-100 flex flex-row text-sky-700'}>

                                    <td className='p-2 basis-1/2'>{track.title}</td>
                                    <td className='p-2 basis-1/4'>{track.date}</td>
                                    <td className='p-2 basis-1/4'>{track.duration}</td>

                                </tr>
                            </Link>
                        ))}
                    </tbody>
                </table>

            </div>

            {loading.current && <div className='mr-10'>loading...</div>}
        </div>
    )
}
