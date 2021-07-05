function Tasks(props) {
  return (
    <div>
      {props.tasks.map((tasks) => (
        <h3 key={tasks.id}>{tasks.text}</h3>
      ))}
    </div>
  );
}

export default Tasks;
