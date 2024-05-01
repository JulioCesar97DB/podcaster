import React from 'react'
import { Link } from 'react-router-dom';

export const PodcastCardList = ({ id, summary, author, img, title }) => {

    return (
        <Link to={`/podcast/${id}`} state={{ summary, author, img, title }}>
            <div className=" bg-white shadow-lg border-2 border-gray-100">
                <div className="inset-x-0 top-0 h-5 flex items-center justify-center">
                    <img className="w-28 h-w-28 rounded-full border-4 border-white object-cover -mt-8" src={img} alt="Imagen del podcast" />
                </div>
                <div className="pt-12 pb-2">
                    <div className="">
                        <div className="text-lg font-semibold text-gray-800 text-center">{title}</div>
                        <p className=" text-gray-600 text-center">Autor: {author}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
