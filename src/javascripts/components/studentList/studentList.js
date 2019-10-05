import utilities from '../../helpers/utilities';

import './studentList.scss';
import studentData from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';
import housesData from '../../helpers/data/houseData';

const createStudentList = () => {
  const houses = housesData.getHouses();
  const students = studentData.getStudents();
  let domString = '<ul class="student-list">';
  // domString += 'students';
  for (let i = 0; i < students.length; i += 1) {
    for (let j = 0; j < houses.length; j += 1) {
      if (students[i].houseId === houses[j].id) {
        domString += studentCard.createStudentCard(students[i], houses[j]);
      }
    }
  }
  domString += '</ul>';
  utilities.printToDom('student-container', domString);
};

export default { createStudentList };
