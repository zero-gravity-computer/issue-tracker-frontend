// author, title, status, createdAt, id, severity
import moment from "moment";

export function IssueTeaser({ id, author, title, createdAt }) {
  function Info() {
    let formattedDate = moment(createdAt).fromNow();
    return (
      <div>
        <span style={{ ...styles.info }}>{id}</span>
        <span style={{ ...styles.info, ...styles.author }}>
          created by {author}
        </span>
        <span style={{ ...styles.info, ...styles.dateMakeUp }}>
          {formattedDate}
        </span>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>

      <Info />
    </div>
  );
}
let styles = {
  title: {
    color: "crimson",
    margin: "0px",
    fontSize: "1.5em",
  },

  container: {
    border: "1px solid silver",
    padding: "10px",
  },

  dateMakeUp: {
    color: "#999",
    fontSize: ".8em",
  },

  info: {
    padding: "0 10px 0 0",
  },

  author: {
    fontSize: ".9em",
  },
};
