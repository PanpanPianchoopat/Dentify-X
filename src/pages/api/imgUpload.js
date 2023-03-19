export default async function uploadHandler(req, res) {
  res.status(200).end("upload");
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};
