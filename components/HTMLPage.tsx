import React, { Component } from 'react';
 
const root_path = "https://azure-vision.github.io/bubbles-html/";
 
export default class HtmlPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iFrameHeight: '0px'
        }
    }
    render() {
        let path = this.props.match.params.path;//路由参数
        let url = root_path+"default.html";
        if (path === "service") {
            url = root_path+"service.html";
        } else if (path === "interfaceCase") {
            url = root_path+"interface_view.html";
        } 
        console.log(path,url);
        return (
            <div>
                <iframe  ref="iframe" scrolling="yes" frameBorder="0"
                    style={{width:'100%',height:this.state.iFrameHeight, overflow:'visible'}}
                    onLoad={() => {//iframe高度不超过content的高度即可
                        let h = document.documentElement.clientHeight - 20;
                        this.setState({
                            "iFrameHeight": h + 'px'
                        });
                    }} 
                    src={url}
                />
            </div>
        )
    }
}