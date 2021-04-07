import React from "react";
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from "suneditor-react";

export class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.inputArticle = this.inputArticle.bind(this);
        this.publicArticle = this.publicArticle.bind(this);
        this.sunEditorRef = React.createRef();
        this.state = {
            title:"",
            text:"",
            author:""
        }
    }
    componentDidMount() {
        this.props.changeH1("Добавить статью");

    }
    inputArticle(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    publicArticle(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("title",this.state.title);
        formData.append("text",this.state.text);
        formData.append("author",this.state.author);
        fetch("http://aistwerty.beget.tech/projects/reactTech/php/add_post.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));

    }
    render() {
        return(
            <div className="container my-5">
                <div className="col-sm-8 mx-auto">
                    <form onSubmit={this.publicArticle}>
                        <div className="mb-3">
                            <input value={this.state.title} name="title" onChange={this.inputArticle} className="form-control" type="text" placeholder="Название статьи"/>
                        </div>
                        <div className="mb-3">
                            <SunEditor
                                ref={this.sunEditorRef}
                                placeholder="Текст статьи"
                                height="200px"
                                //value={this.state.text}
                                name="text"
                                onChange={(value)=>{
                                    const name = (this.sunEditorRef.current.props.name);
                                    this.setState({
                                        [name]: value
                                    })
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <input value={this.state.author} name="author" onChange={this.inputArticle} className="form-control" type="text" placeholder="Автор"/>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="submit" className="btn btn-info" value="Опубликовать"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}