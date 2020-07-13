// author, title, status, createdAt, id, severity
import moment from "moment";

export function IssueTeaser(props) {
  function FormatInfo() {
    let formattedDate = moment(props.createdAt).fromNow();
    return (
      <div>
        <span style={{ ...styles.info }}>{props.id}</span>
        <span style={{ ...styles.info }}>created by {props.author}</span>
        <span style={{ ...styles.info, ...styles.dateMakeUp }}>
          {formattedDate}
        </span>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{props.title}</h3>

      <FormatInfo />
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

  dateMakeUp: {
    color: "#bbb",
    fontSize: ".8em",
  },

  info: {
    padding: "0 10px 0 0",
  },
};
