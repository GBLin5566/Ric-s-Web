
var React = require('react');

class MessageItem extends React.Component {
    render() {
        const { mine, text} = this.props;
        return (
                <div className={`message-item ${mine ? 'message-item-mine': 'message-item-other' }`}>
                    <span>{text}</span>
                </div>
                );
    }
}

module.exports=MessageItem;
