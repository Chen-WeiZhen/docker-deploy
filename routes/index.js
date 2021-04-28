const router = require('koa-router')()
const articleDao = require('../model/ArticleModel')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  })
})

router.post('/string', async (ctx, next) => {
  const { author, content } = ctx.request.body
  let result = await articleDao.create({ author, content })
  console.log(result.errors)
  ctx.body = {
    result,
    status: 200,
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

module.exports = router
