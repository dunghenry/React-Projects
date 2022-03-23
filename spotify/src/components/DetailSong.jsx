import React, { useContext } from 'react';
import {Songs} from '../Context';
const DetailSong = () => {
    const { song } = useContext(Songs);
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold text-3xl'>Music Player</h2>
            <h2 className='text-neutral-400 text-2xl text-center mt-5'>{ song.name}</h2>
            <div className='w-[240px] m-auto mt-5'>
                <img className='w-full' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly items-center mt-7'>
                <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt='avatar' />
                <span className='text-xl text-white'>{ song.name}</span>
            </div>
        </div>
    )
}

export default DetailSong;