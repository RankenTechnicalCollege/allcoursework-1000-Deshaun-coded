import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { nanoid } from 'nanoid'
import _ from 'lodash';
import Student from './Student';
import AddStudent from './AddStudent'

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeyWords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    saveStudents(students);
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
    setAllStudents(students);
    setSearchResults(students);
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent]
    saveStudents(updatedStudents);
  }

  const removeStudent= (studentToDelete)=> {
    console.table(student)
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
      <div className='row'>
        {searchResults &&
          searchResults.map((student) => (
            <div className='col-lg-2' key={student.id}>
              <div className='card'>
                <img src={student.image} alt='Student' className='card-img-top mx-auto' />
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item text-center'>{student.firstName}</li>
                  <li className='list-group-item text-center'>{student.lastName}</li>
                  <li className='list-group-item text-center'>{student.email}</li>
                  <li className='list-group-item text-center'>{student.gradYear}</li>
                </ul>
              </div>
            </div>
          ))}
      </div>
<AddStudent addStudent={addStudent}/>
      <div className='row mt-4'>
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
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-lg btn-primary' onClick={searchStudents}>
            Search Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;