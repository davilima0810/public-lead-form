import styled, { css } from 'styled-components'

type TableProps = {
    customGridStyles?: string
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    margin: 0;
    gap: 8px;
    border-radius: 8px;
`

export const ContentDemands = styled.div`
    background-color: white;
    margin-top: 32px;
    padding: 16px;
    border-radius: 8px;
`

export const HeaderContentDemands = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;

    .tabs-demands-right {
        display: flex;
        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
        }
    }
`

export const TableTitle = styled.div<TableProps>`
    ${({ customGridStyles }) => css`
        display: grid;
        grid-template-columns: ${customGridStyles};
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        padding: 0 8px;
        margin-bottom: 12px;
        color: #8E8E8E;
    `}
`

export const TableRow = styled.div<TableProps>`
    ${({ customGridStyles }) => css`
        display: grid;
        grid-template-columns: ${customGridStyles};
        grid-auto-columns: 1fr;
        grid-auto-flow: column;

        padding: 10px 16px;
        border-top: 1px solid #E2E2E2;
        > * {
            overflow: hidden;
        }
    `}
`

export const TableCol = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-column: span 1;

        span.value {
            width: 100%;
            font-size: 14px;
            max-width: 86%;
            font-weight: 500;
            color: #3A3A3A;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `}
`

export const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.56);
`

export const TableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const EmptyRow = styled.div`
    width: 100%;
    padding: 40px;
    background-color: #f6f6f9;
    border-radius: 8px;
    text-align: center;
`
