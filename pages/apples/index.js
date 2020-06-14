export default function Apples({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div>
          <h2>{user.name}</h2>
          <p>Handle: {user.handle}</p>
          <p>Bio: {user.bio}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/users");
  const { data } = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
