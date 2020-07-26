import { IssueTeaser } from "../../components/IssueTeaser";
import { IssueBox } from "../../components/IssueBox";
import * as backend from "../../data/backend";

export default function IssuesPage(props) {
  console.log(props.issues);
  return (
    <div>
      <IssueBox> </IssueBox>
      {props.issues.map(function (issue) {
        return (
          <IssueTeaser
            key={issue.id}
            title={issue.title}
            id={issue.id}
            author={issue.author}
            createdAt={issue.created_at}
            severity={issue.severity}
          />
        );
      })}
    </div>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      issues: await backend.issues(),
    }, // will be passed to the page component as props
  };
}
