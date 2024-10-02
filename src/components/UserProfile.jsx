import React from "react";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Corrected function
    // setState is used to pass object along
    // function is bound correctly now using arrow function
    changeName = () => {
        this.setState({
            name: 'Charlie'
        });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile