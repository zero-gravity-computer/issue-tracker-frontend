import { Pane, Text, Select } from "evergreen-ui";

export function IssueBox() {
  return (
    //   Container that hold all of the IssueTeaser Components
    <Pane display="flex" background="overlay" justifyContent="flex-end">
      <Pane>
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" defaultValue>
            Foo
          </option>
          <option value="bar">Bar</option>
        </Select>
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" defaultValue>
            Foo
          </option>
          <option value="bar">Bar</option>
        </Select>
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" defaultValue>
            Foo
          </option>
          <option value="bar">Bar</option>
        </Select>
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" defaultValue>
            Foo
          </option>
          <option value="bar">Bar</option>
        </Select>
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" defaultValue>
            Foo
          </option>
          <option value="bar">Bar</option>
        </Select>
      </Pane>
    </Pane>
  );
}
