export class URLGetter {
  state: defs = {
    href: null,
    hiddenField: null
  }

  constructor(hidden_url: any) {
    this.state = {
      href: window.location.href,
      hiddenField: hidden_url
    }
    hidden_url.value = this.state.href
  }
}

interface defs {
  href: null | string,
  hiddenField: null | any
}