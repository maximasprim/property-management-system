import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userRouter } from './Users/user.router'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})

app.route('/',userRouter)
