const issues = [
  {
    id: 141282,
    user_id: 10354,
    is_open: true,
    title: "Broken symlink in $HOME causes errors during dev build",
    markdown: "#Bug Report\n\nWhen I kick off a development build...",
    created_at: "2020-06-14T21:30:27.397Z",
    updated_at: "2020-06-14T21:30:27.397Z",
  },
  {
    id: 141658,
    user_id: 24311,
    is_open: true,
    title:
      "Return other objects/arrays in getStaticPaths() function (re: Discussion #14150)",
    markdown:
      "#Feature Request\n\nConsider the code\n```\nexport async function\n```",
    created_at: "2020-06-14T21:32:43.753Z",
    updated_at: "2020-06-14T21:33:11.427Z",
  },
  {
    id: 14165,
    user_id: 71532,
    is_open: false,
    title: "Node-sass not found (tho using sass) with Yarn 2",
    markdown:
      "# Bug Report\n\n## Describe the bug\nTrying to import scss file and but got an error:",
    created_at: "2020-06-14T21:34:53.570Z",
    updated_at: "2020-06-14T21:35:08.416Z",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: issues });
};
