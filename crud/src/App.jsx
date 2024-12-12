import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { nanoid } from 'nanoid'
import _, { update } from 'lodash';
import Student from './component/Student';
import AddStudent from './component/Addstudent'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeyWords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect (() => {
    if(localStorage){
      const studentsLocalStorage = JSON.parse(localStorage.getItem("students"));

      if(studentsLocalStorage){
        saveStudents(studentsLocalStorage);
      }else{
        saveStudents(students);
      }
    }
}, []);

  const students = [{
    firstName: "Anna-diana",
    lastName: "Orhtmann",
    email: "aorhtmann0@upenn.edu",
    image: "images/student1.jpg",
    gradYear: 2024
  },
  {
    id: nanoid(),
    firstName: "Genevra",
    lastName: "Pollie",
    email: "gpollie1@jigsy.com",
    image: "images/student2.jpg",
    gradYear: 2025
  },
  {
    id: nanoid(),
    firstName: "Maxwell",
    lastName: "Oller",
    email: "moller2@fastcompany.com",
    image: "images/student3.jpg",
    gradYear: 2026
  },
  {
    id: nanoid(),
    firstName: "Lorianna",
    lastName: "Taye",
    email: "ltaye3@timesonline.co.uk",
    image: "images/student4.jpg",
    gradYear: 2025
  },
  {
    id: nanoid(),
    firstName: "Sanson",
    lastName: "Dunlap",
    email: "sdunlap4@whitehouse.gov",
    image: "images/student5.jpg",
    gradYear: 2024
  },
  {
    id: nanoid(),
    firstName: "Hendrik",
    lastName: "Caswall",
    email: "hcaswall5@netscape.com",
    image: "images/student6.jpg",
    gradYear: 2026
  },
  {
    id: nanoid(),
    firstName: "Aldrich",
    lastName: "Struijs",
    email: "astruijs6@domainmarket.com",
    image: "images/student7.jpg",
    gradYear: 2025
  },
  {
    id: nanoid(),
    firstName: "Rayshell",
    lastName: "Nertney",
    email: "rnertney7@mediafire.com",
    image: "images/student8.jpg",
    gradYear: 2024
  },
  {
    id: nanoid(),
    firstName: "Fran",
    lastName: "Corten",
    email: "fcorten8@stumbleupon.com",
    image: "images/student9.jpg",
    gradYear: 2026
  },
  {
    id: nanoid(),
    firstName: "Shellysheldon",
    lastName: "Hounson",
    email: "shounson9@facebook.com",
    image: "images/student10.jpg",
    gradYear: 2025
  }];

const saveStudents = (students) => {
    setAllStudents (students);
    setSearchResults(students);
    if(localStorage){
      localStorage.setItem("students", JSON.stringify(students));
      console.log("saved to local storage");
    }
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent]
    saveStudents(updatedStudents);
  }

  const removeStudent= (studentToDelete)=> {
    //console.table(studentToDelete);
    const updatedStudentArray= allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray);
  }

  const updateStudent= (updatedStudent) =>{
  //console.table(updatedStudent);
    const updatedStudentArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student)
    saveStudents(updatedStudentArray)
}


  const searchStudents = () => {
    let keywordsArray = [];

    if (keywords) keywordsArray = keywords.toLowerCase().split(' ');
    if (gradYear) keywordsArray.push(gradYear.toString());

    if (keywordsArray.length > 0) {
      const results = allStudents.filter((student) =>
        keywordsArray.some(
          (word) =>
            student.firstName.toLowerCase().includes(word) ||
            student.lastName.toLowerCase().includes(word) ||
            student.gradYear === Number(word)
        )
      );
      setSearchResults(results);
    } else {
      setSearchResults(allStudents);
    }
  };


 return (
    <div className='container'>
      <div className='row' id='allStudents'>
        <h3>Current Students</h3>
        {searchResults &&
          searchResults.map((student) => (
            <div className='col-lg-2' key={student.id}>
              <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent}/>
              <div className='card'>
                
                
              </div>
            </div>
          ))}
      </div>
{<AddStudent addStudent={addStudent}/>}
      <div className='row mt-4'id='searchStudents'>
        <h3>Search Students</h3>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by First or Last Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Search First or Last Name'
            onChange={(e) => setKeyWords(e.target.value)}
            value={keywords}
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-select'
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
          >
            <option value=''>Select Year</option>
            {_(allStudents)
              .map((student) => student.gradYear)
              .sort()
              .uniq()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))
              .value()}
          </select>
        
        <div className='col-md-4 mt-3'>
        <div></div>
          <button type='button' className='btn btn-lg btn-primary' onClick={searchStudents}>Search Students <FontAwesomeIcon icon={faSearch}/></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;