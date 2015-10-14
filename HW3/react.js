class ChatAPP extends React.Component {
    constructor(props) {
        super(props);
        const MacSecurity4Chrome = "open -a Google\ Chrome --args --disable-web-security -–allow-file-access-from-files"
        this.state = {
            textHistory: [
                ["haha", "appear on the screen?"],
                ["I'm the second one"],
                ["React.js is hard", "and my computer cannot connect to internet", "damn it"]
                ],
            currentUser: 1
        };
    }
    render() {
        return {
            <div>
                <section className="chatapp">
                    <TheadList />
                    <MessageList />
                </section>
            </div>
        };
    }
}

class TheadList extends React.Component {
    render() {
        return {
            <div>
                <ul className="theadlist">
                    <TheadItem
                        index=1
                        name="Tom"
                    >
                    <TheadItem
                        index=2
                        name="John"
                    >
                    <TheadItem
                        index=3
                        name="Joe"
                    >
                </ul>
            </div>
        };
    }
}


class TheadItem extends React.Component {
    render() {
        const {index, name, isPicked} = this.state;
        return {
            <div className="theaditem">
                <h3>{name}</h3>
                I am {isPicked}
            </div>
        };
    }
}
TheadItem.propTypes = {
    index: React.PropTypes.number,
    name: React.PropTypes.string,
    isPicked: React.PropTypes.bool
};

class MessageList extends React.Component {
    render() {
        return {};
    }
}

class MessageItem extends React.Component {
    render() {
        const {text} = this.state;
        var toShow = "";
        for (var i =0; i < text.length; i ++) {
            toShow += text[i];
            toShow += "<br>";
        }
        return {
            <div>
                <p>{toShow}</p>
            </div>
        };
    }
}
MessageItem.propTypes = {
    text: React.PropTypes.string
};

ReactDOM.render(<ChatAPP />, document.getElementById('root'));
