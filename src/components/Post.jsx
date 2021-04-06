import React from "react";

export class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            text:"",
            author:"",
            data_added:""
        }
    }
    componentDidMount() {
        const formData = new FormData();
        formData.append("id", this.props.match.params.id);
        fetch('http://aistwerty.beget.tech/projects/reactTech/php/view_post.php', {
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.props.changeH1(result.title);
                this.setState({
                    title:result.title,
                    text:result.text,
                    author:result.author,
                    data_added:result.data_added
                })

            })

    }

    render() {
        return(
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {this.state.text}
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}