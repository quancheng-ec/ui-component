function requireAll(requireContext) {
  return function(type) {
    return requireContext.keys().map(mod => {
      if (type === 'router') {
        const modContent = requireContext(mod)
        return {
          path: '/' + getPath(mod),
          component: modContent,
          meta: modContent.routeConfig
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
