import React from "react";
import "./PostCardTable.scss";

const PostCardTable = () => {
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
            <td name="Type">Hostel</td>
            <td name="Person per room">2</td>
            <td name="Gender">Female</td>
            <td name="Serviced Apartment">Yes</td>
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
            <td name="Duration">per school session</td>
            <td name="Price">200,000</td>
            <td name="Installmental payments">No</td>
            <td name="Slots available">5</td>
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
            <td name="Room">1</td>
            <td name="Kitchen">1</td>
            <td name="Toilet">1</td>
            <td name="Bathroom">1</td>
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
            <td name="Security">24hrs</td>
            <td name="Electricity">24hrs</td>
            <td name="Water">constant</td>
            <td name="Reading/Common room">No</td>
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
            <td name="Bed">Yes</td>
            <td name="Mattress">No</td>
            <td name="Cupboard">No</td>
            <td name="Wardrobe">Yes</td>
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
            <td name="Gas">Yes</td>
            <td name="Gen">Yes</td>
            <td name="Fan">Yes</td>
            <td name="AirCon">Yes</td>
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
            <td name="Cleaning service">Yes</td>
            <td name="Laundering service">Yes</td>
            <td name="Security">Yes</td>
            <td name="Visitation">Visitation Allowed</td>
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
            <td name="Tv">Yes</td>
            <td name="Cable Tv">Yes</td>
            <td name="Car Park">Yes</td>
            <td name="Wifi">No</td>
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
              Mon, Thurs
            </td>
            <td colSpan="2" name="Inspection hours">
              12pm-2pm
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
            <td name="Proximity to road">5/5</td>
            <td name="Proximity to market">5/5</td>
            <td colSpan="2" name="Proximity to school">
              4/5
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostCardTable;
