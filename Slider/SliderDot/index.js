import React,{Component} from 'react';

export default class SliderDot extends Component{
    constructor(props){
        super(props);
    }
    bandleDotClick(i){
        var nowClick = i - this.props.now;
        this.props.turn(nowClick);
    }
    render(){
        let dotNodes = [];
        for(let i=0;i<this.props.count;i++){
            dotNodes[i] = <li key={i} className={this.props.now === i?'bg':''} onClick={this.bandleDotClick.bind(this,i)}></li>;
        }
        return (
            <ul className="bannerTip">
                {dotNodes}
            </ul>
        )
    }
}