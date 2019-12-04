import React, { Component } from 'react'
import "../../utils/upcoming-schedule.css"
import Divider from '@material-ui/core/Divider'
import CheckInRectangle from '../../assets/images/check-in.png'
import CheckOutRectangle from '../../assets/images/checkout.svg'
import BookingIcon from '../../assets/images/mini-booking-icon.png'
import GoogleIcon from '../../assets/images/GoogleIcon.png'
import AirbnbIcon from '../../assets/images/mini-airbnb-icon.svg'
import VrboIcon from '../../assets/images/mini-vrbo-icon.svg'

export default class UpcomingSchedule extends Component {
  state = {
    items: Array.from({ length: 7 })
  };
  render() {
    return (
      <div className="us-main">

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Mon 21</h4>
        <img src={CheckInRectangle} alt=""/>
        <p className="is-place">The Washington Amelia Asimov</p>
      </div>
      <div className="us-main-item-row2 first"> 
      <p>Today</p>
        <img src={BookingIcon} alt=""/>
      </div>
      </div>
      <Divider orientation="vertical"/>

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Tue 22</h4>
        <img src={CheckOutRectangle} alt=""/>
        <p className="is-place">The Jefferson Laurie Wilkins</p>
      </div>
      <div className="us-main-item-row2"> 
        <img src={BookingIcon} alt=""/>
      </div>
      </div>
      <Divider orientation="vertical"/>

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Wed 23</h4>
        <img src={CheckInRectangle} alt=""/>
        <p className="is-place">The Washington Roberts Green</p>
      </div>
      <div className="us-main-item-row2"> 
        <img src={GoogleIcon} alt=""/>
      </div>
      </div>
      <Divider orientation="vertical"/>

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Thu 24</h4>
        <img src={CheckInRectangle} alt=""/>
        <p className="is-place">The Lincoln Amy Pond House</p>
      </div>
      <div className="us-main-item-row2"> 
        <img src={AirbnbIcon} alt=""/>
      </div>
      </div>
      <Divider orientation="vertical"/>

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Fri 25</h4>
        <img src={CheckOutRectangle} alt=""/>
        <p className="is-place">The Lincoln Amy Pond House</p>
      </div>
      <div className="us-main-item-row2"> 
        <img src={BookingIcon} alt=""/>
      </div>
      </div>
      <Divider orientation="vertical"/>

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Sat 26</h4>
        <img src={CheckInRectangle} alt=""/>
        <p className="is-place">The Lincoln James Vardy</p>
      </div>
      <div className="us-main-item-row2"> 
        <img src={VrboIcon} alt=""/>
      </div>
      </div>
      <Divider orientation="vertical"/>

      <div class="us-main-item">
      <div className="us-main-item-row1">
        <p className="is-month">JAN</p>
        <h4>Sun 27</h4>
        <img src={CheckInRectangle} alt=""/>
        <p className="is-place">The Jefferson Michael Smith</p>
      </div>
      <div className="us-main-item-row2"> 
        <img src={GoogleIcon} alt=""/>
      </div>
      </div>
      
      </div>
    )
  }
}

