// author, title, status, createdAt, id, severity

export function IssueTeaser(props) {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{props.title}</h3>
      <p
        style={styles.info}
      >{`${props.id} ${props.author} ${props.createdAt}`}</p>
    </div>
  );
}
let styles = {
  title: {
    color: "crimson",
    margin: "0px",
  },

  container: {
    border: "1px solid silver",
    padding: "10px",
  },
};
