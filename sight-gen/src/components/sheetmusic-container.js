import React from 'react';
import SheetMusic from './sheetmusic';
import "antd/dist/antd.css";

import ex from './tunepad.musicxml';


class SheetMusicContainer extends React.Component {
    render() {
        return (
            <div id={this.props.renderID} className='sheet-music'>
                <SheetMusic renderID={this.props.renderID} xml={ex}/>
            </div>
            
        );
    }
}
  
export default SheetMusicContainer;

