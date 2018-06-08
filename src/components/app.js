import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';

const API_KEY="AIzaSyCiAIcwU5qsqvmt9-TGFFrXnJ4GfurlVg8";

export default class App extends Component {

  constructor(props){
    super(props);

    this.state={
      videos:[]
    };
    YTSearch({key:API_KEY,term:'surf board'},(videos)=>{
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>React simple starter
        <SearchBar />
        <div>
          <VideoList videos={this.state.videos} />
        </div>
      </div>
      
    );
  }
}
