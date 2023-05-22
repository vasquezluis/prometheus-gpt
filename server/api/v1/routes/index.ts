import { Router, Request, Response } from 'express'
import { response } from '../../../common/response'

const router = Router()

router.get('/api/v1/', ({ headers: { host } }: Request, res: Response) => {
  const menu: { [key: string]: string } = {
    chatgpt: `http://${host}/api/v1/chatgpt`
  }

  response.success(res, 200, 'api menu', menu)
})

export default router
