

import React, { useState } from 'react'

import * as S from './styles'
import { NumberUtils } from '@/utils/numberUtils'

interface PaginationPros {
    totalPage: number
    totalRegister?: number
    actualPage: number
    setNumberPage: any
    numberOfPageToShow?: number
}

const LIMIT_PAGE = 3

const Pagination = ({ actualPage, totalPage, setNumberPage, numberOfPageToShow = LIMIT_PAGE }: PaginationPros) => {
    const [selectedElement, setSelectedElement] = useState<number>(actualPage)
    const [pages, setPages] = useState<number[]>([])

    // const pages = []
    // for (let n = 0; n < totalPage; n++) {
    //     pages.push(n)
    // }

    React.useEffect(() => {
        const page = []
        if (totalPage <= 5) {
            for (let n = 0; n < totalPage; n++) {
                page.push(n)
            }
            setPages(page)
        } else {
            const downlimit = selectedElement - numberOfPageToShow < 0 ? 0 : selectedElement - numberOfPageToShow
            const uplimit = selectedElement + numberOfPageToShow < totalPage ? selectedElement + numberOfPageToShow : totalPage
            for (let n = downlimit; n < uplimit; n++) {
                page.push(n)
            }
            setPages(page)
        }
    }, [selectedElement, totalPage])

    React.useEffect(() => {
        setSelectedElement(actualPage)
    }, [actualPage])

    // FIST PAGE

    function first(number: number) {
        setNumberPage(number)
        setSelectedElement(number)
    }

    // NEXT PAGE

    function next(number: number) {
        setNumberPage(number)
        setSelectedElement(number)
    }

    // PREVIOUS PAGE

    function prev(number: number) {
        setNumberPage(number)
        setSelectedElement(number)
    }

    // LAST PAGE

    function last(number: number) {
        setNumberPage(number)
        setSelectedElement(number)
    }

    return (
        <S.Pagination>
            <div className="prev">
                <span onClick={() => first(0)}>Primeira</span>
                <span onClick={() => prev(selectedElement <= 0 ? 0 : selectedElement - 1)}>Anterior</span>
            </div>

            <S.Buttons>
                {pages.map((page, index) => (
                    <button
                        key={index}
                        className={page === selectedElement ? 'actived' : ''}
                        onClick={() => (setSelectedElement(page), setNumberPage(page))}
                    >
                        {NumberUtils.maskNumberInt(page + 1)}
                    </button>
                ))}
            </S.Buttons>

            <div className="next">
                <span onClick={() => next(selectedElement >= pages.length - 1 ? totalPage - 1 : selectedElement + 1)}>Próxima</span>
                <span onClick={() => last(totalPage - 1)}>Última</span>
            </div>
        </S.Pagination>
    )
}

export default Pagination
