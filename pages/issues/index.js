import { IssueTeaser } from "../../components/IssueTeaser";

export default function IssuesPage() {
  return (
    <div>
      <IssueTeaser
        title="Broken UI thing"
        id={1}
        author="JamesJamesJamesJamesJames"
        createdAt="2020-07-13T02:01:11.765Z"
        severity="low"
      />
      <IssueTeaser
        title="Broken UI thing"
        id={1}
        author="JamesJamesJamesJamesJames"
        createdAt="2020-07-13T02:01:11.765Z"
        severity="medium"
      />
      <IssueTeaser
        title="Broken UI thing"
        id={1}
        author="JamesJamesJamesJamesJames"
        createdAt="2020-07-13T02:01:11.765Z"
        severity="low"
      />
      <IssueTeaser
        title="Broken UI thing"
        id={1}
        author="JamesJamesJamesJamesJames"
        createdAt="2020-07-13T02:01:11.765Z"
        severity="high"
      />
    </div>
  );
}
