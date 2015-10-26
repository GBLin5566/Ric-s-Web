
export class ThreadItem extends React.Component {
    render() {
        const {name, content, onClick} = this.props;
        return (
            <li className="thread-item" onClick={onClick}>
                <div>
                    {name}
                </div>
                <div>
                    <span>{content}</span>
                </div>
            </li>
                );
    }
}

