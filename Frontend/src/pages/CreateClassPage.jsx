import { useEffect, useState } from 'react';
import Card from "../components/Card";
const CreateClassPage = () => {
  const [classesName, setClassesName] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('/api/class/getClasses');
        if (!response.ok) {
          throw new Error('Error fetching classes');
        }
        const data = await response.json();
        setClasses(data.classes);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchClasses();
  }, []);
  const createClass = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/class/createClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: classesName }),
      });
      if (!response.ok) {
        throw new Error('Error creating class');
      }

      const data = await response.json();
      alert(data.message);
      setClassesName(''); 

      setClasses(prevClasses => [...prevClasses, { name: classesName }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9eaf7',
    }}>
      <h1 style={{ 
        color: '#6a097d', 
        fontFamily: 'Arial, sans-serif',
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}>
        Create a Class
      </h1>
      <input 
        type="text" 
        value={classesName} 
        onChange={(e) => setClassesName(e.target.value)} 
        placeholder="Class name" 
        style={{
          width: '300px',
          padding: '15px',
          margin: '10px 0',
          boxSizing: 'border-box',
          borderRadius: '5px',
          border: '1px solid #6a097d',
        }}
      />
      <button 
        onClick={createClass} 
        style={{
          backgroundColor: '#6a097d',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          width: '300px',
          marginBottom: '20px',
        }}
      >
        Create Class
      </button>

      {classes.length > 0 ? (
        classes.map((cls, index) => (
          <Card key={index} className={cls.name} />
        ))
      ) : (
        <p>No classes found</p>
      )}
    </div>
  );
};

export default CreateClassPage;