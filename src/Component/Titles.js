import React,{Component} from 'react';

const TitlesList=['an enthusiastic learner.',
                  'Hard Worker.',
                  'an adventure sicker.',
                  'Team Player.',
                ' a self-motivated Experienced software engineer.'];
export default class Titles extends Component{
    state={titleIndex:0,fadeIn:true};
    componentDidMount()
    {
        this.TimeOut=setTimeout(()=>this.setState({fadeIn:false}),2000);
        this.animateTitle();
    }
    componentWillUnmount()
    {
        clearInterval(this.TimeOut);
        clearInterval(this.TimeInterval);
    }
    animateTitle=()=>
    {
        this.TimeInterval=setInterval(() => {
            const titleIndex=(this.state.titleIndex+1)%TitlesList.length;
            this.setState({titleIndex,fadeIn:true});
            this.TimeOut=setTimeout(() => {
                this.setState({fadeIn:false});
            }, 2000);
        }, 4000);
    }
    render()
    {
        const {titleIndex,fadeIn}=this.state;
        const title=TitlesList[this.state.titleIndex];
        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> I am {title}</p>
        )
    }
}
