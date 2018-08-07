import React, { Component } from 'react';
import DeleteCourseComponent from './delete_course';

class CourseRowComponent extends Component {

  render(){

    return (

    <React.Fragment>

      <tr key = {this.props.CourseKey}>
            <td>
              <h3>{this.props.course_name}</h3>
              <p>{this.props.desc}</p>
            </td>
            <td>80 <DeleteCourseComponent CourseKey = {this.props.CourseKey} />
            </td>
      </tr>
    </React.Fragment>
    )
  console.log('on delete in')

}


}





export default CourseRowComponent;
