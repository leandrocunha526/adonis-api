import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
  public async store({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const name = request.input('name')
    const newUser = new User()
    newUser.email = email
    newUser.password = password
    newUser.name = name
    const user = await User.create({
      name,
      email,
      password,
    })
    return response.ok(user)
  }
}
