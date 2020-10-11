import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import UserApi from '../../api/UserApi';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    UserApi.current()
      .then(({ data }) => this.setState({ user: data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg justify-content-around bg-light">
        <div className="collapse container ml-5 navbar-collapse " id="navbarColor01">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link to="/home">
                <img className="navbar-brand" src={Logo} alt="#" style={{ width: 80 }} />
              </Link>
            </li>
            <li className="nav-item mt-4">
              <Link
                to="/homepage"
                className="nav-link font-weight-bold text-uppercase"
                style={{
                  color: '#0C2C54',
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item mt-4">
              <Link
                to="/posts"
                className="nav-link font-weight-bold text-uppercase"
                style={{
                  color: '#0C2C54',
                }}
              >
                Posts
              </Link>
            </li>

            <li className="nav-item mt-4">
              <Link
                to="/chat"
                className="nav-link font-weight-bold text-uppercase"
                style={{
                  color: '#0C2C54',
                }}
              >
                Chat
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mar-pad-top mar-r">
            <li className="nav-item mt-3">
              <div className="navbar-brand">{this.state.user.name}</div>
            </li>
            <li className="nav-item mt-3">
              <Link to="/profile">
                <img
                  className="navbar-brand"
                  src="/avatars/manager.png"
                  style={{ width: '40px', height: '40px' }}
                  alt="User Avatar"
                />
                <div className="middle"></div>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <button
                className="btn btn-primary  border-0 rounded-0 bebas-font"
                style={{
                  backgroundColor: '#FA354D',
                }}
                onClick={this.props.onLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
