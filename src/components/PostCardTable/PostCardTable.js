import React from "react";
import "./PostCardTable.scss";

const PostCardTable = () => {
  return (
    <div className="post-card-table">
      {/* <!-- table of additional features --> */}
      <table>
        <thead>
          <tr>
            <th colSpan="4">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Type</th>
            <th>No per room</th>
            <th>Gender</th>
            <th></th>
          </tr>
          <tr>
            <td name="Type">Hostel</td>
            <td name="No per room">2</td>
            <td name="Gender">Female</td>
            <td></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan="4">Payment method</th>
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
            <th colSpan="4">Rooms</th>
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
            <th colSpan="4">Facilities/Utilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Bed</th>
            <th>Mattress</th>
            <th>Electricity</th>
            <th>Water</th>
          </tr>
          <tr>
            <td name="Bed">Yes</td>
            <td name="Mattress">No</td>
            <td name="Electricity">24hrs</td>
            <td name="Water">constant</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Fan</th>
            <th>AirCon</th>
            <th>Cupboard</th>
            <th>Wardrobe</th>
          </tr>
          <tr>
            <td name="Fan">Yes</td>
            <td name="AirCon">Yes</td>
            <td name="Cupboard">No</td>
            <td name="Wardrobe">Yes</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Gas</th>
            <th>Gen</th>
            <th>Wifi</th>
            <th>Reading/Commo room</th>
          </tr>
          <tr>
            <td name="Gas">Yes</td>
            <td name="Gen">Yes</td>
            <td name="Wifi">No</td>
            <td name="Reading/Commom room">No</td>
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
            <td name="visitation">Visitation Allowed</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan="4">Inspection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Inspection days</th>
            <th>Inspection hours</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td name="Inspection days">Mon, Thurs</td>
            <td name="Inspection hours">12pm-2pm</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan="4">Additional info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Proximity to road</th>
            <th>Proximity to market</th>
            <th>Proximity to school</th>
            <th></th>
          </tr>
          <tr>
            <td name="Proximity to road">5/5</td>
            <td name="Proximity to market">5/5</td>
            <td name="Proximity to school">4/5</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostCardTable;
