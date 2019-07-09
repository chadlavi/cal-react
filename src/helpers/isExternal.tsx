export const isExternal = (url?: string) => {
  const domain = (url?: string) => {
    if (url && url.substr(0, 1) === '#') { return false}
    return url && url.replace('http://','').replace('https://','').split('/')[0]
  }
  return Boolean(url) && Boolean(domain(url)) && domain(window.location.href) !== domain(url)
}