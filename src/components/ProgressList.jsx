import ProgressItem from "./ProgressItem";

function ProgressList({ items, onDelete }) {
    console.log("Items in ProgressList:", items);
    console.log("Rendering items:", items);
  if (items.length === 0) {
    return <p>No progress yet! Add your first entry.</p>;

  }

  return (
    <ul>
      {items.map((item) => (
        <ProgressItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ProgressList;
