import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 2,
      userInfo: {
        name: "Dummy Name",
        location: "India",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/ChandraPrakash-Bathula"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log("component did mount.");

    // this.timerInterval = setInterval(() => {
    //   console.log("Testing");
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
    }
  }

  componentWillUnmount() {
    // clearInterval(this.timerInterval);
    console.log("Component Will Un mount");
  }

  render() {
    const { name, location, avatar_url, company } = this.state.userInfo;
    return (
      <>
        <h1>Profile Class Component.</h1>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <img src={avatar_url} />
        <h3>Company : {company}</h3>
      </>
    );
  }
}
export default Profile;

/* First the constructor will be called and then the render and then the component did mount will be called. */
