const injectBootstrapIcons = (BootstrapIcons: string) => {
    if (document.getElementById('BootstrapIcons')) return

    const containerElement = document.createElement('div')
    containerElement.innerHTML = BootstrapIcons

    if (!containerElement.firstChild) return

    const svgElement = containerElement.firstChild as SVGSVGElement
    svgElement.id = 'BootstrapIcons'
    svgElement.style.display = 'none'

    document.body.append(svgElement)
}

export default injectBootstrapIcons
