import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { count, count2 } = this.state;

    return (
      <>
        <h1>Profile Class Component.</h1>
        <h2>Name : {this.props.name}</h2>
        <h3>Count : {count}</h3>
        <h3>Count: {count2}</h3>
        <button
          onClick={() => {
            this.setState({ count: 1, count2: 2 });
          }}
        >
          set Count
        </button>
      </>
    );
  }
}
export default Profile;
