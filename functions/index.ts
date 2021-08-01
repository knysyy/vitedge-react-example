import { handleEvent } from 'vitedge/worker'

addEventListener('fetch', (event) => {
  try {
    // @ts-ignore
    event.respondWith(
      handleEvent(event, {
        http2ServerPush: {
          destinations: ['style'],
        },
        willRequestApi({ url, query }) {
          console.log('API:', url.pathname, query)
        },
      })
    )
  } catch (error) {
    // @ts-ignore
    event.respondWith(
      new Response(error.message || error.toString(), {
        status: 500,
      })
    )
  }
})
