function requireAll(requireContext) {
  return function(type) {
    return requireContext.keys().map(mod => {
      if (type === 'router') {
        return {
          path: '/' + getPath(mod),
          component: requireContext(mod)
        }
      }
      return getPath(mod)
    })
  }
}

function getPath(module) {
  return module.replace(/(\.\/)|(\.vue)/g, '')
}

const pageContext = requireAll(require.context('./', false, /\.vue$/))

export const routeConfig = pageContext('router')

export const pages = pageContext()
