const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((task, index) => {
        return (
          <div>
            <li key={index}>
              {index + 1}. {task}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
