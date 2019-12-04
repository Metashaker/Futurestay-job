import React, { Component } from 'react'
import Navbar from '../Navbar'
import SmartConnections from './smart-connections'
import RecentActivity from './recent-activity'
import UpcomingSchedule from './upcoming-schedule'
import '../../utils/home-page.css'
import { ReactComponent as SCLogo } from '../../assets/images/XMLID 16.14.svg';
import Activity  from '../../assets/images/Ellipse.png'
import Vector from '../../assets/images/Vector.png'
import Circle from '../../assets/images/Rectangle 12 Copy 4.png'

import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom'
import FutureStayHomeIcon from '../../assets/images/futurestay-home-icon.svg'

export default class HomeLayout extends Component {

  menu = (
    <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
  )

  render() {
    return (
      <div className="home-main background">
        <Navbar>

        </Navbar>
        <img src={FutureStayHomeIcon} alt=""/>
        <div className="home-first-text-div">

          <div className="home-first-text-div-first-group">
          <div className="home-first-text-div-first-group-first-item">
            <SCLogo></SCLogo>
            <h2>Smart Connections</h2>
          </div>
            <Dropdown overlay={this.menu}>
              <a className="ant-dropdown-link" href="#">
                Last 30 days <Icon type="down" />
              </a>
            </Dropdown>
          </div>

          <div className="home-first-text-div-second-group">
            <div className="home-first-text-div-second-group-first-item">
              <img src={Activity} alt=""/>
              <h2>Recent activity</h2>
            </div>
            <div className="home-first-text-div-second-group-second-item">
              <Link style={{ textDecoration: 'none' }}><p>View last activity</p></Link>
            </div>
          </div>
        </div>

        <div className="home-first-boxes-div">
          <SmartConnections></SmartConnections>
          <RecentActivity></RecentActivity>
        </div>


        <div className="home-second-text-div">
          <div className="home-second-text-div-first-group">
          <i className="material-icons md-36" height="30px" width="30px">today</i>
          <h2>Upcoming Schedule</h2>
          </div>

          <div className="home-second-text-div-second-group">
            <div className="home-second-text-div-second-group-first-item">
              <i class="material-icons">add_circle_outline</i>
              <p>Add Reservation</p>
            </div>
            <img src={Vector}  height="30px"alt=""/>
            <Dropdown overlay={this.menu}>
                <a className="ant-dropdown-link" href="#">
                  Only busy days <Icon type="down" />
                </a>
            </Dropdown>
          <div className="home-second-text-div-second-group-third-item">
            <img src={Circle}  alt=""/>
            <img src={Circle} alt=""/>
          </div>
            </div>
          
        </div>
        <div className="home-second-boxes-div">
          <UpcomingSchedule></UpcomingSchedule>
        </div>
      </div>
    )
  }
}
