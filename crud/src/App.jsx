import { useState, useEffect } from 'react';
import Student from './component/Student';
import AddStudent from './component/AddStudent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeyWords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    if(localStorage){
      const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));

      if(studentsLocalStorage){
        saveStudents(studentsLocalStorage);
      }else{
        saveStudents(students);
      }
    }
   
  }, []);
  
  const students= [{
    id:nanoid(),
    firstName: "Chibi",
    lastName: "Doki",
    email: "chibidoki@mythictalent.com",
    image: "images/chibi.jpg",
    gradYear: 2024 
  }, {
    id:nanoid() ,
    firstName: "Mishy",
    lastName: "Molly",
    email: "mollymishy@gmail.com",
    image: "images/mishymolly.jpg",
    gradYear: 2025
  }, {
    id:nanoid() ,
    firstName: "OctoPimp",
    lastName: "",
    email: "tcroal2@illinois.edu",
    image: "images/Octopimp.jpg",
    gradYear: 2026
  }, {
    id:nanoid() ,
    firstName: "Grevillea",
    lastName: "Grimoire",
    email: "grimmiva@gmail.com",
    image: "images/grimmivt.jpg",
    gradYear: 2025
  }, {
    id:nanoid() ,
    firstName: "OkCode",
    lastName: "",
    email: "cdoghartie4@chron.com",
    image: "images/OkCode.jpg",
    gradYear: 2024
  }, {
    id:nanoid() ,
    firstName: "Oliva",
    lastName: "Monroe",
    email: "Olivia@gmail.com",
    image: "images/Olivia.jpg",
    gradYear: 2026
  }, {
    id:nanoid() ,
    firstName: "Filian",
    lastName: "",
    email: "cwhelband6@cmu.edu",
    image: "images/filian.jpg",
    gradYear: 2025
  }, {
    id:nanoid() ,
    firstName: "Iron",
    lastName: "Mouse",
    email: "gaustwick7@nyu.edu",
    image: "images/ironmouse.jpg",
    gradYear: 2024
  }, {
    id:nanoid() ,
    firstName: "Eros",
    lastName: "Valentyne",
    email: "bbatham8@networksolutions.com",
    image: "images/Eros.jpg",
    gradYear: 2026
  }, {
    id:nanoid() ,
    firstName: "Ruben",
    lastName: "Sargasm",
    email: "vhadaway9@skype.com",
    image: "images/RubenSargasm.jpg",
    gradYear: 2025
  }];

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage){
      localStorage.setItem('students', JSON.stringify(students));
      
    }
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  };

  const removeStudent = (studentToDelete) => {
    //console.table(studentToDelete);
    const updatedStudentArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray); 
  }

  const updateStudent = (updatedStudent) => {
    //console.table(updatedStudent);
    const updatedStudentArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student);
    saveStudents(updatedStudentArray)
  }

  const searchStudents = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(gradYear){
      keywordsArray.push(gradYear.toString());
    }

    if(keywordsArray.length > 0){
      const searchResults = allStudents.filter(student => {
        for(const word of keywordsArray){
          if(student.firstName.toLowerCase().includes(word) ||
             student.lastName.toLowerCase().includes(word) ||
             student.gradYear === parseInt(word)){
              return true;
            }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allStudents)
    }
  };

  return (
    <div className='container'>
      <div className='row' id='allStudents'>
        <h3>Current Students</h3>
        {searchResults && searchResults.map((student) => (
        <div className='col-lg-2' key={student.id}>
          <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent}/>

        </div>)
  )}
      </div>

        {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>*/}
        {<AddStudent addStudent={addStudent}/>}
        <div className='row mt-4' id='searchStudents'>
          <h3>Search Vtuber</h3>
          <div className='col-md-4'>
            <label htmlFor='txtKeywords'>Search by First or Last Name</label>
            <input type='text' className='form-control' placeholder='Search First or Last Name' onChange={e => setKeyWords(e.currentTarget.value)} value={keywords}/>
          </div>
          <div className='col-md-4'>
          <label htmlFor='select'>Search by Graduation Year</label>
            <select className='form-select' value={gradYear} onChange={e => setGradYear(e.currentTarget.value)}>
              <option value= ''>Select Year</option>
              {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
            </select>
          </div>
          <div className='col-md-4 mt-3'>
            <button type='button' className= 'btn btn-lg btn-primary' onClick={searchStudents}>Search Vtuber <FontAwesomeIcon icon={faSearch} /></button>
          </div>

        </div>
    </div>
  )
}

export default App