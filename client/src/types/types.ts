interface IDataItem {
    title: string,
    by: string,
    id: number,
    img: string,
    exclude: boolean
}

export type IData = Array<IDataItem>

export type Icons = {
    [key: string]: any
}
