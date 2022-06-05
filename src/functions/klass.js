export default (obj, list = '', append = '') => {
    let classList = `${list}`
    const hasApp = append !== '' ? `${append}-` : ''
    if (hasApp !== '') {
        classList = [...classList.split(' ')]
            .reduce((prev, curr) => {
                return `${prev} ${hasApp}${curr}`
            }, '')
    }
    Object.keys(obj).forEach(k => {
        if (obj[k]) {
            classList = `${classList} ${hasApp}${k}`
        }
    })
    return { className: classList }
}
