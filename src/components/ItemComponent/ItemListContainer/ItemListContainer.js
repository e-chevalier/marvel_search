import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import useGetData from '../../../hooks/useGetData'
import Loading from '../../LoadingComponent/Loading'
import { useSearchParams } from 'react-router-dom'
import PaginationPages from '../../PaginationPagesComponent/PaginationPages/PaginationPages'

const ItemListContainer = () => {

    const [ currentPage, SetCurrentPage] = useState(1)
    const PAGINATION_SIZE = 10

    const [searchParams, setSearchParams] = useSearchParams();
    // single-time read
    const params = Object.fromEntries([...searchParams]);
    //console.log('Mounted:', params);
    console.log(Object.keys(params)[0])
    const queryParamToSearch =  Object.keys(params)[0]
    console.log(queryParamToSearch)

    useEffect(() => {
        // read the params on component load and when any changes occur 
        const currentParams = Object.fromEntries([...searchParams]);
        // get new values on change
        console.log('useEffect:', currentParams);
        // update the search params programmatically
        //setSearchParams({ sort: 'name', order: 'ascending' });
    }, [searchParams]);

    const [data, loading] = useGetData(queryParamToSearch)

    return (
        loading ?
            <Loading />
            :
            <Container id="cards" className="py-5 my-5">
                <ItemList data={data.slice((currentPage-1)* PAGINATION_SIZE, currentPage * PAGINATION_SIZE)} />
                <PaginationPages currentPage={currentPage} total={Math.ceil(data.length/PAGINATION_SIZE)} onChange={(pagina) => { SetCurrentPage(pagina)}}></PaginationPages>
            </Container>
    )
}

export default ItemListContainer