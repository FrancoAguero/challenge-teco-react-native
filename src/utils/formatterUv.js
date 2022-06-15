export const formatterUv = (iUv) => {
    const indiceUv = parseInt(iUv)
    const bajo = [0, 1, 2]
    const medio = [3, 4, 5, 6, 7]
    if(bajo.includes(indiceUv))
        return "Bajo"
    if(medio.includes(indiceUv))
        return "Medio"
    return "Alto"
}