import React, { Component } from 'react';
import CourseRowComponent from './course_row';
import CourseTableComponent from './course_table';
//<input type='submit' value = 'Add a Course'/>
class AddCourseComponent extends Component{


  render(){
    return (
      <form id='add-course'>
        <input type='text' required ref='new_course'/>
        <input type='text' required ref='description'/>
        <button onClick = {this.handleAddCourse} className='btn btn-success btn-sm'> Add a course </button>
      </form>
    )
  }

  //Custom Functions
  handleAddCourse = (e) => {
    e.preventDefault();
    const course_name = this.refs.new_course.value;
    const description = this.refs.description.value;
    console.log("Clicked");
    this.props.onAddCourse({'id': '', 'course_name':course_name, 'description': description});

  }

}

export default AddCourseComponent;
