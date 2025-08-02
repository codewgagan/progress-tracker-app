function ProgressItem({ item, onDelete }) {
    console.log("ProgressItem data:", item);

  return (
    <li className="progress-item" style={{ marginBottom: "15px" }}>
      <strong>{item.title}</strong> - {item.category} ({item.date})
      <p>{item.notes}</p>
      
      <button
        onClick={() => onDelete(item.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        
      >
        Delete
      </button>
    </li>
  );
}

export default ProgressItem;
