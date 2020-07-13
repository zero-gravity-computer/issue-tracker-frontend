// author, title, status, createdAt, id, severity
import moment from "moment";
export function IssueTeaser(props) {
  function formatInfo() {
    let formattedDate = moment(props.createdAt).fromNow();
    return `#${props.id} created by ${props.author} ${formattedDate}`;
  }
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{props.title}</h3>
      <p style={styles.info}>{formatInfo()}</p>
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
