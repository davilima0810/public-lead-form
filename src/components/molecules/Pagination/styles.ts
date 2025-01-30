import styled, { css } from 'styled-components'

export const Pagination = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;

    span,
    button {
        cursor: pointer;
        color: #000000;

        -webkit-touch-callout: none;

        -webkit-user-select: none;

        -khtml-user-select: none;

        -moz-user-select: none;

        -ms-user-select: none;

        user-select: none;
    }

    span {
        font-size: 1.6rem;
        font-weight: 400 !important;
        color: #000000;

        :hover {
            color: #3e3e3e;
        }
    }

    span + span {
        margin-left: 20px;
    }
`

export const Buttons = styled.div`
    ${({ theme }) => css`
        margin: 0 20px;

        .actived {
            background: #00995D;

            color: white;
        }

        button {
            padding: 2px 7px;

            border: none;

            border-radius: 5px;

            font-weight: 400;

            font-size: 1.4rem;

            background: transparent;

            :hover {
                background: #00995D;

                color: white;
            }
        }

        button + button {
            margin-left: 10px;
        }
    `}
`
