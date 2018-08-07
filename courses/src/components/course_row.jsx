import React, { Component } from 'react';

const course_list = [
{
"id":1,
"course_name":"CSC108",
"description":"Into to Programming"
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

class CourseRowComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { course_list };
  }

  render(){

    return (
    <React.Fragment>
      {this.state.course_list.map(course => (

      <tr key = {course.id}>
            <td>
              <h2>{course.course_name}</h2>
              <p>{course.description}</p>
            </td>
            <td>80</td>
      </tr>

      ))}

    </React.Fragment>
    );


}

}




export default CourseRowComponent;
