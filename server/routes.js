import express from 'express'
import * as Path from 'node:path/posix'
import * as URL from 'node:url'
import * as fs from 'node:fs/promises'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const router = express.Router()
export default router

// Your routes/router(s) should go here

router.get('/', async (req, res) => {
  const filePath = Path.join(__dirname, 'data', 'data.json')
  const data = await fs.readFile(filePath, 'utf-8')

  const parsedData = JSON.parse(data)
  const viewData = parsedData
  res.render('home', viewData)
})

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
})
