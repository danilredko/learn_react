import React, { Component } from 'react';
import CourseRowComponent from './course_row';
import CourseTableComponent from './course_table';
//<input type='submit' value = 'Add a Course'/>
class DeleteCourseComponent extends Component{
  
  render(){

    return (
      <button onClick={this.handleDeleteCourse} className='btn btn-danger'> Delete </button>

    )
  }
  //Custom Functions
  handleDeleteCourse = (e) => {
    e.preventDefault();
    console.log(this.props.CourseKey, 'in delete course')
    const deleteId = this.props.CourseKey;
    console.log(deleteId)
    this.props.onDeleteCourse(deleteId)
  }

}

export default DeleteCourseComponent;
