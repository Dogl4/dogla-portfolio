// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const projects = [
    { id: 1, project: 'Web site Dogla', type: 'fronEnd', link: '', img: '' },
    { id: 2, project: 'Blogs Api', type: 'backend', link: '', img: '' },
    { id: 3, project: 'Pixel Art', type: 'fronEnd', link: '', img: '' },
  ]
  res.status(200).json(projects)
}
