import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import useGetData from '../../../hooks/useGetData'
import Loading from '../../LoadingComponent/Loading'
import { useSearchParams } from 'react-router-dom'
import PaginationPages from '../../PaginationPagesComponent/PaginationPages/PaginationPages'
import SearchBar from "../../SearchBarComponent/SearchBar";

const ItemListContainer = () => {

    const [currentPage, SetCurrentPage] = useState(1)
    const PAGINATION_SIZE = 10
    const [searchParams, setSearchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    let { character } = params
    let queryParamToSearch = ''

    queryParamToSearch = character ? character : Object.keys(params)[0]

    useEffect(() => {
        if (queryParamToSearch) { // Search not random
            setSearchParams({ character: queryParamToSearch, page: currentPage })
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams, currentPage])

    const [data, loading] = useGetData(queryParamToSearch)

    return (
        loading ?
            <Loading />
            :
            <>
                <SearchBar onSearch={(page) => { SetCurrentPage(page) }} />
                <Container id="cards" className="py-5 my-5">
                    <ItemList
                        data={data.slice((currentPage - 1) * PAGINATION_SIZE, currentPage * PAGINATION_SIZE)}
                    />
                    <PaginationPages
                        currentPage={currentPage}
                        total={Math.ceil(data.length / PAGINATION_SIZE)}
                        onChange={(page) => {
                            SetCurrentPage(page)
                        }} />
                </Container>
            </>
    )
}

export default ItemListContainer