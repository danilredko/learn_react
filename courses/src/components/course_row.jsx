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
            <td>80 <button onClick={this.handleDeleteCourse} className='btn btn-danger'> Delete </button> </td>
      </tr>
    </React.Fragment>
    )
  console.log('on delete in')

}

//Custom Functions
  handleDeleteCourse = (e) => {
    e.preventDefault();
    console.log( 'in delete course')

    this.props.onDeleteCourse(this.props.course_name)
  }



}











export default CourseRowComponent;
