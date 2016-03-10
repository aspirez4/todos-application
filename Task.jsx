// Task component - represents a single todo item
Task = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        task: React.PropTypes.object.isRequired
    },

    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Meteor.call('setChecked', this.props.task_id, ! this.props.task.checked)
    },

    deleteThisTask() {
        Meteor.call('removeTask', this.props.task._id)
    },

    render() {
        // Give tasks a different classNAme when they are checked off,
        // so that we ca n style them nicely in CSS
        const taskClassName = this.props.checked ? "checked" : "";

        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask}>
                    &times;
                </button>

                <input
                    type="checkbox"
                    readOnly={true}
                    checked={this.props.checked}
                    onClick={this.toggleChecked} />

                <span className="text">
                    <strong>{this.props.task.username}</strong>: {this.props.task.text}
                </span>
            </li>
        );
    }
});