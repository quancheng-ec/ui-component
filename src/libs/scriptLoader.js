
import loadScript from 'load-script'

export default function loadExternalScript(scriptUrl, scriptTagId) {
  return new Promise((resolve, reject) => {
    let isScriptLoaded = false
    for (const script of document.scripts) {
      if (script.getAttribute('data-id') === scriptTagId) {
        isScriptLoaded = true
        break
      }
    }
    if (isScriptLoaded) resolve()
    loadScript(scriptUrl, {
      attrs: { 'data-id': scriptTagId }
    }, resolve)
  })
}

