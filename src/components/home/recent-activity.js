import React, { Component } from 'react'
import '../../utils/recent-activity.css'
import InfiniteScroll from 'react-infinite-scroll-component'




export default class RecentActivity extends Component {
  state = {
    items: Array,
    RecentActivityItems : [
      {
        title: "You got paid!",
        time: "2:25",
        message: "Booking.com commision for Reservation #185 has been paid."
      },{
        title: "Commission Paid",
        time: "11:45",
        message: "Booking.com commision for Reservation #263 has been paid."
      },{
        title: "New Booking",
        time: "2:25",
        message: "Great news, Reservation #348 has been confirmed and payment collected."
      }
     
    ]
  };


  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 3 }))
      });
    }, 1500);
  };
  render() {
    return (
      <div className="ra-main">
        <InfiniteScroll
          className="ra-main-scroller"
          dataLength={this.state.RecentActivityItems.length}
          next={this.fetchMoreData}
          hasMore={true}
          scrollableTarget="ra-main"
          loader={<h4>Loading more...</h4>}
        >
          {this.state.RecentActivityItems.map((i, index) => (
            <div className="ra-main-scroller-item" key={index}>
              <div className="ra-main-scroller-item-first-group-item-col1">
                <h4>{i.title}</h4>
                <p>{i.time}</p>
              </div>
              <div className="ra-main-scroller-item-first-group-item-col2">
                <p>{i.message}</p>
              </div>
            </div>
          ))}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </InfiniteScroll>
      </div>
    )
  }
}
