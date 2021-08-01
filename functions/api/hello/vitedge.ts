import { defineApiEndpoint } from 'vitedge/define';

export default defineApiEndpoint({
  handler({ query, request }) {
    if (request.method !== 'GET') {
      throw new Error('Method not supported!')
    }
    return {
      data: {
        msg: 'Hello vitedge!'
      }
    }
  },
  options: {
    cache: {
      api: 85
    }
  }
})
