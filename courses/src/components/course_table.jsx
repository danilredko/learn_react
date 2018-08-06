import React, { Component } from 'react';
import CourseRowComponent from './course_row';


class CourseTableComponent extends Component {
  state = {
    count: 0
  };

  render(){

    return (
    <React.Fragment>
      <table className='table table-bordered'>

          <tr>
            <th scope='col'>Course Name</th>
            <th scope='col'>Course Grade</th>
          </tr>

          <tr>
            <CourseRowComponent/>
          </tr>

      </table>
      <button className='btn btn-success btn-sm'> Add a course </button>
    </React.Fragment>
    );

  }


}

export default CourseTableComponent;
