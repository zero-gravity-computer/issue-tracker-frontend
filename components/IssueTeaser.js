// author, title, status, createdAt, id, severity
import moment from "moment";
import { Pane, Checkbox, Card, Heading, Text } from "evergreen-ui";
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
    >
      <Pane>
        <Checkbox
          type="checkbox"
          onChange={(e) => setIsSelected(!isSelected)}
          checked={isSelected}
          marginTop="5px"
        ></Checkbox>
      </Pane>
      <Pane marginLeft="10px">
        <Heading margin="0" size={600}>
          {title}
        </Heading>
        <Text size={300}>
          <span>#{id} &nbsp;</span>
          <span>created by {author} &nbsp;</span>
          <span>{moment(createdAt).fromNow()}</span>
        </Text>
      </Pane>
    </Pane>
  );
}
