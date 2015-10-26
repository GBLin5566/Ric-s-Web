
class MessageItem extends React.Component {
    render() {
        const { mine, text} = this.props;
        return (
                <div className={`message-item ${mine ? 'mine': 'other' }`}>
                    <span>{text}</span>
                </div>
                );
    }
}

module.exports=MessageItem;
