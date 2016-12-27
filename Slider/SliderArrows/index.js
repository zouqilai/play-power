import React,{Component} from 'react';

export default class SliderArrows extends Component{
    constructor(props){
        super(props);
    }
    handleArrows(n){
        this.props.turn(n);
    }
    render(){
        return (
            <div>
                <a href="javascript:void(0);" className="bannerLeft"
                   onClick={this.handleArrows.bind(this,-1)}></a>

                <a href="javascript:void(0);" className="bannerRight"
                    onClick={this.handleArrows.bind(this,1)}></a>
            </div>

        )
    }
}