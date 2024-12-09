
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
  const { allStudents, setAllStudents, } = useState(null);

  const students = [{ 
    firstName: "Anna-diana", 
    lastName: "Orhtmann", 
    email: "aorhtmann0@upenn.edu",
    image: "student1.jpeg" 
  },
  {id: nanoid(),
    firstName: "Genevra",
    lastName: "Pollie",
    email: "gpollie1@jigsy.com",
    image: "student2.jpeg"
  },
  { id: nanoid(),
    firstName: "Maxwell", 
    lastName: "Oller", 
    email: "moller2@fastcompany.com" ,
    image: "student3.jpeg"
  },
  { id: nanoid(),
    firstName: "Lorianna", 
    lastName: "Taye", 
    email: "ltaye3@timesonline.co.uk" ,
    image: "student4.jpeg"
  },
  { id: nanoid(),
    firstName: "Sanson", 
    lastName: "Dunlap", 
    email: "sdunlap4@whitehouse.gov" ,
    image: "student5.jpeg"
  },
  { id: nanoid(),
    firstName: "Hendrik", 
    lastName: "Caswall", 
    email: "hcaswall5@netscape.com" ,
    image: "student6.jpeg"
  },
  { id: nanoid(),
    firstName: "Aldrich", 
    lastName: "Struijs", 
    email: "astruijs6@domainmarket.com" ,
    image: "student7.jpeg"
  },
  { id: nanoid(),
    firstName: "Rayshell", 
    lastName: "Nertney", 
    email: "rnertney7@mediafire.com",
    image: "student8.jpeg"
   },
  { id: nanoid(),
    firstName: "Fran", 
    lastName: "Corten", 
    email: "fcorten8@stumbleupon.com" ,
    image: "student9.jpeg"
  },
  { id: nanoid(),
    firstName: "Shellysheldon", 
    lastName: "Hounson", 
    email: "shounson9@facebook.com" ,
    image: "student10.jpeg"
  }]

  return (
    <div className='container'>
      <div className='row'>
        {allStudents && allStudents.map((student) => ( 
        <div className='col-lg-2' key={student.id}>
          <img src={student.image} alt="Our Student" />
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>{student.firstName}</li>
            <li className='list-group-item'>{student.lastName}</li>
            <li className='list-group-item'>{student.email}</li>
          </ul>
        </div>)

  )}

        <div className='col-lg-2'>Col1</div>
        <div className='col-lg-2'>Col1</div>
        <div className='col-lg-2'>Col1</div>
        <div className='col-lg-2'>Col1</div>
        <div className='col-lg-2'>Col1</div>
        <div className='col-lg-2'>Col1</div>
      </div>
      {!allStudents && <button type='button' className='btn btn-lg btn-success'onClick={() => setAllStudents(students)}>Save Students</button>}
    </div>

    


  )
}

export default App
