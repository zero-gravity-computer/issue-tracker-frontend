// author, title, status, createdAt, id, severity
import moment from "moment";
import { Pane, Checkbox } from "evergreen-ui";
import React, { useState } from "react";

export function IssueTeaser({ id, author, title, createdAt }) {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <Pane padding={10} background="tint2" borderRadius={3} display="flex">
      <Pane>
        <input
          type="checkbox"
          style={styles.input}
          onChange={(e) => setIsSelected(!isSelected)}
          checked={isSelected}
        ></input>
      </Pane>
      <Pane>
        <h3 style={styles.title}>{title}</h3>
        <span style={{ ...styles.info }}>{id}</span>
        <span style={{ ...styles.info, ...styles.author }}>
          created by {author}
        </span>
        <span style={{ ...styles.info, ...styles.dateMakeUp }}>
          {moment(createdAt).fromNow()}
        </span>
        {String(isSelected)}
      </Pane>
    </Pane>
  );
}

let styles = {
  title: {
    color: "#234361",
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

  input: {
    float: "left",
    margin: "20px 0px",
    width: "35px",
    height: "15px",
    width: "15px",
  },
};
