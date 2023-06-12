import * as bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST (
  request: Request
) {
  try {
    const body = await request.json()

    const {
      email,
      name,
      password
    } = body

    if (!email || !name || !password) {
      return new NextResponse('Missing info', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword
      }
    })

    const { hashedPassword: hashedPass, ...userWithoutPass } = user

    return NextResponse.json(userWithoutPass)
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR')
    return new NextResponse('Internal Error, Talk With an Administrator', { status: 500 })
  }
}
