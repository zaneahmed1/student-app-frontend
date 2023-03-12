
import { FaMinus, FaPlus } from 'react-icons/fa';

import './StudentCard.css';

const StudentCard = ({ student, expanded, setExpanded, onClick }) => {


  const { email, company, firstName, lastName, pic, grades, id, skill } =
    student;

  // Converted the grades to numbers
  const numericGrades = grades.map((grade) => Number(grade));

  // Add up all the grades
  // Init total = 0
  let total = 0;
  // For each grade, add grade to total
  for (const grade of numericGrades) {
    total += grade;
  }

  // Divide total by number of grades and assign to a var
  const average = total / numericGrades.length;

  console.log(
    `<StudentCard /> rendered name=${firstName} expanded=${expanded}`
  );
  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="StudentCard__info">
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company} </li>
          <li>Skill: {skill}</li>
          <li>Average: {average}%</li>
        </ul>
        {expanded && (
          <div className="StudentCard__grades">
            <ul>
              {grades.map((grade, index) => (
                <li key={`${grade}-${index}`}>
                  <span>Test {index + 1}</span> <span>{grade}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="StudentCard__controls">
        <button
          onClick={onClick}
        >
          {expanded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
    </div>
  );//
};

export default StudentCard;
