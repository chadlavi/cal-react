export const isExternal = (url?: string) => {
  const domain = (u?: string) => {
    if (u && u.substr(0, 1) === "#") {return false}
    return u && u.replace("http://", "").replace("https://", "").split("/")[0]
  }
  return Boolean(url) && Boolean(domain(url)) && domain(window.location.href) !== domain(url)
}
