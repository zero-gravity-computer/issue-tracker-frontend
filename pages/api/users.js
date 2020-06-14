const users = [
  {
    id: 10354,
    handle: "callsea1",
    name: "Sean Callahan",
    bio: "I like to lead teams and write code.",
    location: "Chicago",
  },
  {
    id: 24311,
    handle: "j-griffiths",
    name: "Jack Griffiths",
    bio: "physics at ncl. soon to be phd student at durham.",
    location: "shotley bridge, durham",
  },
  {
    id: 3904,
    handle: "chrisands",
    name: "Andrey Osiyuk",
    bio: "",
    location: "Moscow",
  },
  {
    id: 71532,
    handle: "jtyers",
    name: "Jonny",
    bio: "",
    location: "UK",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: users });
};
