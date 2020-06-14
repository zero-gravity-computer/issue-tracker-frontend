let issueComments = [
  {
    id: 500317,
    issue_id: 141282,
    user_id: 71532,
    markdown:
      "/cc @callsea1\nmaybe there is something with nodejs 14 resolution and how yarn v2 handles it. Not sure.",
    created_at: "2020-06-14T21:42:58.715Z",
    updated_at: "2020-06-14T21:42:58.715Z",
  },
  {
    id: 500419,
    issue_id: 141282,
    user_id: 10354,
    markdown: "Thanks, I'll take a look",
    created_at: "2020-06-14T21:44:26.658Z",
    updated_at: "2020-06-14T21:44:26.658Z",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: issueComments });
};
