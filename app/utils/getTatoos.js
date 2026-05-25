

export const getTatoos = async () => {

    try {
        const res = await fetch('')
        if (!res.ok) throw new Error(res.status, res.statusText)
        const tatoos = res.json()
        return tatoos
    } catch (error) {
        throw new Error('Server Error', error)
    }


}