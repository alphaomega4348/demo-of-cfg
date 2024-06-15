const Card = ({ className, classId}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '20px',
      backgroundColor: '#f9eaf7', // light pink-purple shade
      margin: '20px',
      padding: '20px',
      boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
    }}>
      <h2 style={{ 
        color: '#6a097d', // dark purple text
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}>
        {className}
      </h2>
      
     
    </div>
  );
};

export default Card;