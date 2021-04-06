import React from "react";

export class Contact extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.changeH1("Контакты");
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you
                            as soon as possible!</p>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Имя:</label>
                                    <input type="text" className="form-control" placeholder="Имя" id="name" required data-validation-required-message="Введите Ваше имя."/>
                                        <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Email:</label>
                                    <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Введите Ваш email."/>
                                        <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Номер телефона:</label>
                                    <input type="tel" className="form-control" placeholder="Номер телефона" id="phone" required data-validation-required-message="Введите свой номер телефона"/>
                                        <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Тест сообщения:</label>
                                    <textarea rows="5" className="form-control" placeholder="Текст сообщения" id="message" required data-validation-required-message="Поле для ввода текста сообщения."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-primary" id="sendMessageButton">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}