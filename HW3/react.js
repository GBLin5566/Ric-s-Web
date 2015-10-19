class ChatAPP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatHistory: [['string1', 'string', 'string ends'], ['string2', 'string', 'string ends'], ['string3', 'string', 'string ends']],
            currentUser: 1,
            userName: ['Sia', 'Dan', 'GG輪班救台灣']
        };
    }

    handleChangeUser(val){
        this.setState({
            currentUser: val
        });
    }

    render(){
        return (
                <div>
                    <TheadList 
                    userName={this.state.userName}
                    />
                    <MessageList 
                    chatHistory={this.state.chatHistory}
                    currentUser={this.state.currentUser}
                    />
                </div>
                );
    }    
}

class TheadList extends React.Component {
    renderTheadItem(item, i) {
        return (
                <TheadItem 
                index = {i}
                userName = {this.props.userName[i]}
                />
                );
    }
    render() {
        const {userName} = this.props;
        return (
                <div>
                    <ul className="thead-list">{userName.map(this.renderTheadItem, this)}</ul>
                </div>
                );
    }
}


class TheadItem extends React.Component {
    getUserName() {
        return this.props.userName;
    }
    render() {
        const {index, userName} = this.props;
        return(
                <div className="thead-item">
                    {this.getUserName()}
                </div>
                );
    }
}

class MessageList extends React.Component {
    renderMessageItem(i) {
        return(
                <MessageItem
                chatHistory = {this.props.chatHistory[i]}
                />
                );
    }
    render() {
        const {currentUser, chatHistory} = this.props;
        return (
                <div className="message-list">
                    <MessageItem
                    chatHistory = {chatHistory[currentUser]}
                    />
                </div>
                );
    }
}

class MessageItem extends React.Component {
    renderChat(i){
        return(
                <p>{this.props.chatHistory[i]}</p>
                );
    }
    render() {
        const {chatHistory} = this.props;
        return(
                <div>
                    {chatHistory.map(function(chat){
                        return (
                            <div>
                                {chat}
                            </div>
                            );
                                                   })}
                </div>
                );
    };
}

ReactDOM.render(<ChatAPP />, document.getElementById('root'));
