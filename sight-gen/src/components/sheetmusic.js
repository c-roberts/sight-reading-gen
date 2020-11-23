import React from 'react';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import "antd/dist/antd.css";


class SheetMusic extends React.Component {
    constructor(props) {
        super(props);
        this.OSMD = null;
    }

    componentDidMount() {

        this.OSMD = new OpenSheetMusicDisplay(document.getElementById(this.props.renderID), {
            autoResize: true,
            backend: "svg",
            drawTitle: false,
            renderSingleHorizontalStaffline: true,
            autoBeam: true,
            tupletsBracketed: true,
            autoBeamOptions: {groups: [[1,2],[3,4]]},
            tupletsRatioed: true,
            alignRests: 2,
            drawPartNames: false,
            drawingParameters: "compacttight"
          });

        (async () => {
            await this.OSMD.load(this.props.xml);
            this.OSMD.render();
          })();
    }

    render() {
        
        return (
            <div/>
        );
    }
}
  
export default SheetMusic;

