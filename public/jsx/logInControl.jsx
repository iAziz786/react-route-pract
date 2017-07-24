import React from 'react';
import ReactDOM from 'react-dom';

class LogInControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginControl = this.handleLoginControl.bind(this);
    this.handleLogoutControl = this.handleLogoutControl.bind(this);
    this.setState = {isLoggedIn: false};
  }

  handleLoginControl() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutControl() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogOutButton onClick={this.handleLogoutControl} />
    } else {
      button = <LogInButton onClick={this.handleLoginControl} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LogInButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogOutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}

function UserGreetings(props) {
  return (
    <h1>Welcome Back</h1>
  );
}

function GuestGreetings(props) {
  return (
    <h1>Please log in</h1>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreetings />;
  }
  return <GuestGreetings />
}

ReactDOM.render(
  <LogInControl />,
  document.getElementById('root')
);
