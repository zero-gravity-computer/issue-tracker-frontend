export default function IssueTeaser(id, title, createdAt, isOpen) {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        #{id} opened at {new Date(createdAt).toLocaleString()}
      </p>
    </div>
  );
}
