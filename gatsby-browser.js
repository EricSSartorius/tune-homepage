export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}
