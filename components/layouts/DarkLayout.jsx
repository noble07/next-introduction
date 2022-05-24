
const DarkLayout = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      padding: '10px'
    }}>
      <h3>Drak-Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}

export default DarkLayout