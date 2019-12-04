import React, { Component } from 'react'
import '../../utils/smart-connections.css'
import BookingIcon from '../../assets/images/Booking-icon.png'
import VrboIcon from '../../assets/images/vrbo.svg'
import AirbnbIcon from '../../assets/images/Airbnb-icon.svg'
import PendingBotton from '../../assets/images/Group 18.png'
import ComputerIcon from '../../assets/images/computer.png'

export default class SmartConnections extends Component {
  render() {
    return (
      <div className="sc-main">

        <div className="sc-main-bookings-div">
        <div className="sc-main-bookings-div-title sc-main-title">
          <h3>Bookings</h3>
        </div>
          <div className="sc-main-bookings-div-second-group">
            <div className="sc-main-bookings-div-second-group-item">
              <img src={BookingIcon} width="31px" height="32px" alt=""/>
              <h4>23</h4>
            </div>
            <div className="sc-main-bookings-div-second-group-item">
            <img src={VrboIcon} alt=""/>
            <img src={PendingBotton} style={{ marginBottom: '-13%' }} alt=""/>
            </div>
            <div className="sc-main-bookings-div-second-group-item">
            <img src={AirbnbIcon} width="31px" height="32px" alt=""/>
            <h4>36</h4>
            </div>
            <div className="sc-main-bookings-div-second-group-item">
              <img src={ComputerIcon} width="31px" height="32px" style={{background: '#FFF',color:'#26CAD3', fontSize:'30px'}} />
              <h4>12</h4>
            </div>
          </div>
        </div>

        <div className="sc-main-horizontal-divisor">
          <hr/>
        </div>

        <div className="sc-main-ct-and-revenue-div">

          <div className="sc-main-ct-div">
            <div className="sc-main-ct-title-div">
              <h3>Completed tasks</h3>
            </div>
            <div className="sc-main-ct-div-second-group">
              <div className="sc-main-ct-div-second-group-item">
                <div className="sc-main-ct-div-second-group-item-row1">
                  <i class="material-icons">mood</i>
                </div>
                <div className="sc-main-ct-div-second-group-item-row2">
                  <div className="sc-main-ct-div-second-group-item-row2-col1">
                    <h4>87</h4>
                    <i style={{color: '#26CAD3'}} class="fas fa-check"></i>
                  </div>
                  <div className="sc-main-ct-div-second-group-item-row2-col2">
                    <p>Guest <br/> Interactions</p>
                  </div>
                </div>
              </div>
              <div className="sc-main-ct-div-second-group-item">
                <div className="sc-main-ct-div-second-group-item-row1">
                  <i class="far fa-calendar-check"></i>
                </div>
                <div className="sc-main-ct-div-second-group-item-row2">
                  <div className="sc-main-ct-div-second-group-item-row2-col1">
                    <h4>132</h4>
                    <i style={{color: '#26CAD3'}} class="fas fa-check"></i>
                  </div>
                  <div className="sc-main-ct-div-second-group-item-row2-col2">
                    <p>Number of<br/>Bookings</p>
                  </div>
                </div>
              </div>
              <div className="sc-main-ct-div-second-group-item">
                <div className="sc-main-ct-div-second-group-item-row1">
                  <i style={{paddingBottom:'10%'}} class="material-icons">credit_card</i>
                </div>
                <div className="sc-main-ct-div-second-group-item-row2">
                  <div className="sc-main-ct-div-second-group-item-row2-col1">
                    <h4>52</h4>
                    <i style={{color: '#26CAD3'}} class="fas fa-check"></i>
                  </div>
                  <div className="sc-main-ct-div-second-group-item-row2-col2">
                    <p>Payments<br/>Processed</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="sc-main-vertical-divisor">
            </div>
            
            <div className="sc-main-revenue-div">
              <div className="sc-main-revenue-title-div">
                <h3>Revenue</h3>
              </div>
              <div className="sc-main-ct-div-second-group-item is-rev">
                <div className="sc-main-ct-div-second-group-item-row1 is-rev-icon">
                  <i class="material-icons">attach_money</i>
                </div>
                <div className="sc-main-ct-div-second-group-item-row2 is-rev-row2">
                  <div className="sc-main-ct-div-second-group-item-row2-col1 is-rev-number">
                    <h4 style={{marginLeft:'-5%'}}>32,568.00</h4>
                  </div>
                  <div className="sc-main-ct-div-second-group-item-row2-col2">
                    <p>Total volume of<br/>Bookings</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
