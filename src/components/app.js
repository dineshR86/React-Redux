import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetails from './video_detail';
import _ from 'lodash';

const API_KEY="AIzaSyCiAIcwU5qsqvmt9-TGFFrXnJ4GfurlVg8";

export default class App extends Component {

  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };
    
    this.videoSearch("chelsea");
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState(
        {
          videos:videos,
          selectedVideo:videos[0]
        }
      );
    });
  }

  render() {
    const videoSearchTerm=_.debounce((term)=> {this.videoSearch(term)},1000)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchTerm} />
        <div>
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos} />
        </div>
      </div>
      
    );
  }
}
