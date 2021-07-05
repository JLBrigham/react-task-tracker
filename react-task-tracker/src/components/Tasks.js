function Tasks(props) {
  return (
    <div>
      {tasks.map((tasks) => (
        <h3 key={props.id}>{props.text}</h3>
      ))}
    </div>
  );
}

export default Tasks;
