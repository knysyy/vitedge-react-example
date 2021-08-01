import { defineEdgeProps } from 'vitedge/define'

export default defineEdgeProps({
  handler({ params = {}, query = {} }) {
    return {
      data: {
        number: Math.random()
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
