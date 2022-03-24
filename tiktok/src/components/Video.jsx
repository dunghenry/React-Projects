import React, { useRef, useState, useEffect } from "react";
import { FaMusic } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaComment, FaShare } from './../../node_modules/react-icons/fa/index.esm';
const VideoInfo = ({ avatar, music, idName, nickName, content }) => {
    // console.log(content);
    return (
        <div className="flex flex-row">
            <img className="rounded-full w-[70px] h-[70px]"
                src={avatar} />
            <div className="ml-3 min-w-[80%]">
                <div>
                    <a className="text-xl font-bold hover:underline">{idName}</a>
                    <a className="text-sm ml-2">{ nickName}</a>
                </div>
                <div>{content}</div>
                <div className="flex flex-row items-center cursor-pointer">
                    <FaMusic />
                    <span className="ml-3 font-semibold hover:underline ">{ music }</span>
                </div>
            </div>
            <div>
                <button className="p-1 mt-1  pl-4 pr-4 border-2 text-red-500 rounded-md border-red-400">Follow</button>
            </div>
        </div>
    );
};
const VideoContent = ({ video, like, share, cmt }) => {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const scrollRef = useRef();
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
            
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    
    return (
        <div className="flex flex-row" >
            <video
                ref={videoRef}
                onClick={handleVideo} className="z-[2] w-[80%] max-h-[600px] ml-[50px] 
                rounded-md mt-4"
                src={video}
                loop
            >
            </video>
            <div className="flex flex-col justify-end ml-7">
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaHeart className="text-xl" />
                    </div>
                    <span>{like}</span>
                </div>
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaComment className="text-xl text-center" />
                    </div>
                    <span>{ cmt }</span>
                </div>
                <div className="text-center">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaShare className="text-xl text-center" />
                    </div>
                    <span>{share}</span>
                </div>
            </div>
        </div>
    )
}
const Video = ({data}) => {
    const { cmt, avatar, video, idName, content, like, music, nickName, share } = data;
    return (
        <div className="max-w-[600px] mt-5 mb-5 snap-start">
            <VideoInfo avatar={avatar} idName={idName} nickName={nickName} music={music} content={content}/>
            <VideoContent video={video} cmt={cmt} like={like} share={share}/>
            <hr className="mt-10"></hr>
        </div>
    )
};
export default Video;
