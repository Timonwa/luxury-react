import React from "react";
import "./PostCardTable.scss";

const PostCardTable = ({ features }) => {
  return (
    <div className="post-card-table">
      {/* <!-- table of additional features --> */}
      <table>
        <thead>
          <tr>
            <th className="heading" colSpan="4">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Type</th>
            <th>Person per room</th>
            <th>Gender</th>
            <th>Serviced Apartment</th>
          </tr>
          <tr>
            <td name="Type">{features.type}</td>
            <td name="Person per room">{features.person_per_room}</td>
            <td name="Gender">{features.gender}</td>
            <td name="Serviced Apartment">{features.serviced_apartment}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="heading" colSpan="4">
              Payment method
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Duration</th>
            <th>Price</th>
            <th>Installmental payments</th>
            <th>Slots available</th>
          </tr>
          <tr>
            <td name="Duration">{features.duration}</td>
            <td name="Price">{features.price}</td>
            <td name="Installmental payments">{features.installments}</td>
            <td name="Slots available">{features.slots}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="heading" colSpan="4">
              Rooms
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Room</th>
            <th>Kitchen</th>
            <th>Toilet</th>
            <th>Bathroom</th>
          </tr>
          <tr>
            <td name="Room">{features.room}</td>
            <td name="Kitchen">{features.kitchen}</td>
            <td name="Toilet">{features.toilet}</td>
            <td name="Bathroom">{features.bathroom}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="heading" colSpan="4">
              Facilities/Utilities
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Security</th>
            <th>Electricity</th>
            <th>Water</th>
            <th>Reading/Common room</th>
          </tr>
          <tr>
            <td name="Security">{features.security}</td>
            <td name="Electricity">{features.electricity}</td>
            <td name="Water">{features.water}</td>
            <td name="Reading/Common room">{features.common_room}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Bed</th>
            <th>Mattress</th>
            <th>Cupboard</th>
            <th>Wardrobe</th>
          </tr>
          <tr>
            <td name="Bed">{features.bedroom}</td>
            <td name="Mattress">{features.mattress}</td>
            <td name="Cupboard">{features.cupboard}</td>
            <td name="Wardrobe">{features.wardrobe}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Gas</th>
            <th>Gen</th>
            <th>Fan</th>
            <th>AirCon</th>
          </tr>
          <tr>
            <td name="Gas">{features.gas}</td>
            <td name="Gen">{features.gen}</td>
            <td name="Fan">{features.fan}</td>
            <td name="AirCon">{features.ac}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Cleaning service</th>
            <th>Laundering service</th>
            <th>Security</th>
            <th>Visitation</th>
          </tr>
          <tr>
            <td name="Cleaning service">{features.cleaning}</td>
            <td name="Laundering service">{features.laundry}</td>
            <td name="Security">{features.security}</td>
            <td name="Visitation">{features.visitation}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>TV</th>
            <th>Cable Tv</th>
            <th>Car Park</th>
            <th>Wifi</th>
          </tr>
          <tr>
            <td name="Tv">{features.tv}</td>
            <td name="Cable Tv">{features.cable_tv}</td>
            <td name="Car Park">{features.car_park}</td>
            <td name="Wifi">{features.wifi}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="heading" colSpan="4">
              Inspection
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">Inspection days</th>
            <th colSpan="2">Inspection hours</th>
          </tr>
          <tr>
            <td colSpan="2" name="Inspection days">
              {features.inspection_days.join(",")}
            </td>
            <td colSpan="2" name="Inspection hours">
              {features.inspection_hours.join("-")}
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="heading" colSpan="4">
              Additional info
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Proximity to road</th>
            <th>Proximity to market</th>
            <th colSpan="2">Proximity to school</th>
          </tr>
          <tr>
            <td name="Proximity to road">{features.road_proximity}/5</td>
            <td name="Proximity to market">{features.market_proximity}/5</td>
            <td colSpan="2" name="Proximity to school">
              {features.school_proximity}/5
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostCardTable;
