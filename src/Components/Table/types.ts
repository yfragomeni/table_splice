export type TableComponentProps = {
    columns: TableComponentColumn[]
    datasource: any[]
    rowsPerPage?: number
}

export type TableComponentColumn = {
    title: string
    dataIndex: string
}