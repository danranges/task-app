const Overview = (props) => {
  const { tasks, deleteTask, editTask, commitEdit } = props;

  const handleDelete = (uuid) => {
    deleteTask(uuid);
  };

  const handleEdit = (idx) => {
    editTask(idx);
  };

  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((task, idx) => {
        return (
          <div style={{ display: 'flex' }} key={task.uuid}>
            <button onClick={() => handleDelete(task.uuid)}>X</button>
            <button onClick={() => handleEdit(task.uuid)}>Edit</button>
            {!task.editing ? (
              <li>
                {idx + 1} {task.name}
              </li>
            ) : (
              <input
                defaultValue={task.name}
                onChange={(e) => commitEdit(e, task.uuid)}
                type="text"
              />
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
