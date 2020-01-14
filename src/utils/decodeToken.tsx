import jwt from 'jsonwebtoken'






interface IDecoded {
    sid: string
    cid: string
    exp: number
}

export const decodeToken = (): IDecoded | null => {
    const jwtToken = localStorage.getItem('kbucard')
    if (jwtToken) {
        const token = jwtToken.split(' ')[1]
        const decoded: any = jwt.decode(token)
        return decoded
    } else {
        return null
    }
}


export const verifyToken = (): boolean => {
    const decoded: IDecoded | null = decodeToken()
    if (decoded === null) {
        return false
    } else {
        const exp: number = decoded.exp
        const convertedExp: number = exp * 1000
        const current: number = new Date().getTime()

        if (convertedExp <= current) {
            return false
        } else {
            return true
        }
    }
}