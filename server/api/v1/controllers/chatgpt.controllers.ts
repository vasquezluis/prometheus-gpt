import { Request, Response } from 'express'
import { response } from '../../../common/response'
import createHttpError from 'http-errors'

import { getModelsService, chatgptService } from '../services/chatgpt.services'

export const getModels = async (req: Request, res: Response) => {
  try {
    const result = await getModelsService()

    if (!result) {
      return response.error(
        res,
        new createHttpError.NotFound('Models not found')
      )
    }

    response.success(res, 200, 'List of models', result)
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error)
    }
  }
}

export const chatgpt = async (req: Request, res: Response) => {
  try {
    const { message } = req.body

    const result = await chatgptService(message)

    response.success(res, 201, 'Chat response', result?.data.choices[0].text)
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error)
    }
  }
}
