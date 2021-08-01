import { defineEdgeProps } from 'vitedge/define'

export default defineEdgeProps({
  handler({ params = {}, query = {} }) {
    return {
      data: {
        msg: 'Hello vitedge'
      }
    }
  },
  options: {
    cache: {
      html: 90,
      api: 90
    }
  }
})
