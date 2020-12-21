import React, {Component} from 'react';
import './Sidenav.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';

class Sidenav extends Component {

    state = {
      menuOpen: false,
      opacity: '0'
    }

    // will show sidenav on all parts of the page except the top
    componentDidMount() {
      if (typeof window !== 'undefined') {
        window.onscroll = () => {
          let currentScrollPos = window.pageYOffset;
          let maxScroll = document.body.scrollHeight - window.innerHeight;
          // console.log(maxScroll)
          if (currentScrollPos < 500 && currentScrollPos < maxScroll) { 
            this.setState({ opacity: '0'})
            // console.log(currentScrollPos)
          } else {
            this.setState({ opacity: '1' })
          }
        }
      }
    }

    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // closes menu on link click
    closeMenu () {
      this.setState({menuOpen: false})
    }


  render () {

    return (
      <div className='sidenav' style={{ opacity: `${this.state.opacity}`}}>
        <Menu width={ '15%' } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="home" spy={true} smooth={true} onClick={() => this.closeMenu()}>Home</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="about" spy={true} smooth={true} onClick={() => this.closeMenu()}>About</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="work" spy={true} smooth={true} onClick={() => this.closeMenu()}>Work</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true} onClick={() => this.closeMenu()}>Contact</Link>
          <a className='nav-li' target='_blank' rel="noopener noreferrer" href='https://dev.to/proiacm' onClick={() => this.closeMenu()}>Blog</a>
        </Menu>    
      </div>
    );
  }
}

export default Sidenav;