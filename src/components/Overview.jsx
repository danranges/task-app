const Overview = (props) => {
  const { tasks, deleteTask } = props;

  const handleDelete = (uuid) => {
    deleteTask(uuid);
  };

  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((task, idx) => {
        return (
          <div style={{ display: 'flex' }} key={task.uuid}>
            <button onClick={() => handleDelete(task.uuid)}>X</button>
            <li>
              {idx + 1} {task.name}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
