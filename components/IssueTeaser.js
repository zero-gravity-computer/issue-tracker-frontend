// author, title, status, createdAt, id, severity
import moment from "moment";
import { Pane, Checkbox, Card } from "evergreen-ui";
import React, { useState } from "react";

export function IssueTeaser({ id, author, title, createdAt }) {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <Pane
      padding={10}
      background="tint2"
      display="flex"
      borderColor="silver"
      borderWidth="1px"
      borderStyle="solid"
      style={{ "&:nthChild(1)": { content: `""`, backgroundColor: "red" } }}
    >
      <Pane style={styles.left}>
        <input
          type="checkbox"
          style={styles.input}
          onChange={(e) => setIsSelected(!isSelected)}
          checked={isSelected}
        ></input>
      </Pane>
      <Pane style={styles.right}>
        <h3 style={styles.title}>{title}</h3>
        <span style={{ ...styles.info }}>#{id} &nbsp;</span>
        <span style={{ ...styles.info, ...styles.author }}>
          created by {author} &nbsp;
        </span>
        <span style={{ ...styles.info, ...styles.dateMakeUp }}>
          {moment(createdAt).fromNow()}
        </span>
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

  author: {
    fontSize: ".9em",
  },

  input: {
    width: "15px",
    height: "15px",
  },

  left: {
    padding: "8px 0 0 10px",
  },

  right: {
    padding: "0 0 0 10px",
  },
};
