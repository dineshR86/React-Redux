import React from 'react';
import VideoListItem from './video_list_item';

const VideoList= (props)=>{
    return (
        <div>
            <ul className="col-md-4 list-group">
                {
                    props.videos.map((video,index)=>{
                    return <VideoListItem onVideoSelect={props.onVideoSelect} video={video} key={index} />
                    })
                }
            </ul>
        </div>
    );
}

export default VideoList;