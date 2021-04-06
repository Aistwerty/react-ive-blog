import React from "react";

export class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            h1: ""
        }
    }
    render() {
        return (
            <header className="masthead" style={{backgroundImage: "url('/img/home-bg.jpg')"}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{this.props.h1}</h1>
                                <span className="subheading"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}