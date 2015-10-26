
//import {ThreadItem} from './ThreadItem';
//import {MessageItem} from './MessageItem';
var React = require('react');
var ThreadItem = require('./ThreadItem');
var MessageItem = require('./MessageItem');

const initialState = {
    inputMessage: '',
    threads: [
    {
        name: 'John',
        messages: [
            {mine: false, text: 'Hi!'},
            {mine: true, text: 'Hi?'}
        ]
    },
    {
        name: 'Ann',
        messages: [
            {mine: true, text: 'Hello'},
            {mine: false, text: 'Hello'},
            {mine: false, text: 'React and Webpack world'}
        ]
    },
    {
        name: 'TSMC',
        messages: [
            {mine: false, text: 'Click the link to get the job!'}
        ]
    }
    ],
    currentUser: 0
};

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    
    handleThreadItemClick(i){
        this.setState({
            currentUser: i
        });
    }

    handleNewMessageChange(e){
        this.setState({
            inputMessage: e.target.value
        });
    }

    handleInput(e){
        const inputValue = e.target.value;
        if (e.keyCode == 13 && inputValue != '') {
            const {inputMessage, threads, currentUser} = this.state;
            threads[currentUser].messages.push({
                mine: true,
                text: inputMessage
            });
            this.setState({
                inputMessage: '',
                threads: threads
            });
        }
    }

    renderThreadItem(thread, i){
        const {name, messages} = thread;
        const lastMessage = messages[messages.length - 1];
        return (
            <ThreadItem
                key={i}
                name={name}
                content={lastMessage.text}
                onClick={this.handleThreadItemClick.bind(this, i)}
            />
            );
    }

    renderMessageItem(message, i){
        return(
            <MessageItem 
                key={i}
                mine={message.mine}
                text={message.text}
            />
            );
    }

    render(){
        const {inputMessage, threads, currentUser} = this.state;
        const targetThread = threads[currentUser];
        const targetName = targetThread.name;
        const messages = targetThread.messages;
        return (
            <div className="chat-app">
                <div className="chat-app-left">
                    <div className="heading">
                        <h3 className="messager-title">Messager</h3>
                    </div>
                    <div className="thread-list">
                        {threads.map(this.renderThreadItem, this)}
                    </div>
                </div>
                <div className="chat-app-right">
                    <div className="heading">
                        {messages.map(this.renderMessageItem, this)}
                    </div>
                    <div className="footer">
                        <input
                            className="new-message"
                            type="text"
                            value={inputMessage}
                            onChange={this.handleNewMessageChange.bind(this)}
                            onKeyDown={this.handleInput.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ChatApp;
