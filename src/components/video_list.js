import React from 'react';
import VideoListItem from './video_list_item';

const VideoList= (props)=>{
debugger;
    return (
        <div>
            <ul className="col-md-4 list-group">
                {
                    props.videos.map((video,index)=>{
                    return <li key={index}><VideoListItem video={video} /></li>
                    })
                }
            </ul>
        </div>
    );
}

export default VideoList;