import React,{Component} from 'react';
import SliderDot from './SliderDot';
import SliderArrows from './SliderArrows';

export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {now:0};
    }
    //上一个下一下
    turn(n){
       var _n = this.state.now + n;
       if(_n < 0){
            _n = _n + this.props.items.length;
       }
       if(_n >= this.props.items.length){
           _n = _n - this.props.items.length;
       }
       this.setState({now:_n});
    }
    //自动轮播
    goPlay(){
        if(this.props.autoplay){
            this.autoTimer = setInterval(()=>{
                this.turn(1);
            },this.props.delay*1000);
        }
    }
    //暂停自动轮播
    pausePlay(){
        clearInterval(this.autoTimer);
    }
    //初始化
    componentDidMount(){//成功render，并渲染完成真实DOM之后触发，可以修改DOM
        this.goPlay();
    }
    render(){
        let count = this.props.items.length;

        return (
            <div className="banner" id="banner" onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
                <div className="bannerInner">
                    {
                        this.props.items.map((item,i) =>{
                            return <div key={i} style={this.state.now === i?{opacity:1,zIndex:1}:{}}><img src={item.src} /></div>;
                        })
                    }
                </div>
                {this.props.dots?<SliderDot turn={this.turn.bind(this)} now={this.state.now} count={this.props.items.length} />:null}
                {this.props.arrows?<SliderArrows turn={this.turn.bind(this)} />:null}

            </div>
        )
    }
}