import React, { Component } from 'react';
import CourseRowComponent from './course_row';
import AddCourseComponent from './add_course';
import DeleteCourseComponent from './delete_course';
const course_list = [
{
"id":1,
"course_name":"CSC108",
"description":"Intro to Programming"
},
{
"id":2,
"course_name":"CSC207",
"description":"Software Design"
},

{
"id":3,
"course_name":"STA260",
"description":"Probability and Statistics"
}
]



class CourseTableComponent extends Component {

  state = {
    course_list: course_list

  }

  constructor(){
    super();
    this.onAddCourse = this.onAddCourse.bind(this);
    this.onDeleteCourse = this.onDeleteCourse.bind(this);
  }


  renderCourses(){
    if (course_list.length === 0) return <p>There are no courses</p>;
    return (
    <React.Fragment>
      {

      course_list.map(

          course =>(

            <CourseRowComponent CourseKey={course.id}
            course_name={course.course_name}
            desc={course.description}
            onDeleteCourse={this.onDeleteCourse}/> ))}

    </React.Fragment>

  );
   }

  render(){

    return (
    <React.Fragment>
      <table className='table table-bordered'>
          <tr>
            <th scope='col'>Course Name</th>
            <th scope='col'>Course Grade</th>
          </tr>
          {this.renderCourses()}
      </table>
      <AddCourseComponent onAddCourse={this.onAddCourse} />

    </React.Fragment>



  );

  }

  onAddCourse(course){
    //console.log(course)
    var UpdatedCourseList = this.state.course_list;
    console.log({UpdatedCourseList})
    UpdatedCourseList.push({id: UpdatedCourseList.length, course_name:course.course_name,'description':course.description})
    console.log({UpdatedCourseList})
    this.setState({
      course_list: UpdatedCourseList
    })
  }

  onDeleteCourse(deleteCourse){
    console.log(deleteCourse, 'course_table')
    var UpdatedCourseList = this.state.course_list;

    for (var i = 0; i < UpdatedCourseList.length; i++)
    if (UpdatedCourseList[i].id && UpdatedCourseList[i].course_name === deleteCourse) {
        UpdatedCourseList.splice(i, 1);
        break;
    }
    this.setState({
      course_list: UpdatedCourseList
    })
  }

  }


export default CourseTableComponent;
