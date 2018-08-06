import React, { Component } from 'react';

var course1 = {course_name: 'CSC108',
              course_disc: 'Intro',
              course_grade: 90};

var course2 = {course_name: 'CSC207',
              course_disc: 'cc',
              course_grade: 80};

class CourseRowComponent extends Component {

  state = {

    courses: [course1, course2],
    coursek: ['1','2']

  };

  render(){

    return (
    <div>
       {  this.state.courses.map( c => <td> {c.course_name } </td>) } 
       {  this.state.courses.map( c => <td> {c.course_disc } </td>) }

    </div>);

  }

  addRow(){

  }


}

export default CourseRowComponent;
