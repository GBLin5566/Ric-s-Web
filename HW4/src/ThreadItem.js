
var React = require('react');

class ThreadItem extends React.Component {
    render() {
        const {name, content, onClick} = this.props;
        return (
            <li className="thread-item" onClick={onClick}>
                <div>
                    {name}
                </div>
                <div>
                    <span className="thread-item-content">{content}</span>
                </div>
            </li>
                );
    }
}

module.exports = ThreadItem;
