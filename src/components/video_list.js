import React from 'react';

const VideoList= (props)=>{
debugger;
    return (
        <div>
            Fetching the video list!
            <ul className="col-md-4 list-group">
                {
                    props.videos.map((video,index)=>{
                    return <li key={index}>{video.snippet.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default VideoList;