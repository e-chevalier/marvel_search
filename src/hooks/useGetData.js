import { useEffect, useState } from "react";
import getFetch from "../services/GetData/getFetch.js";

const useGetData = (id) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch(id)
            .then(res => {
                console.log("Hace el fecth para id:" + id)
                setData(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('GetData Finalizada para id:' + id);
            });

        return () => {
            setLoading(true)
        }
    }, [id])

    return [data, loading]
}

export default useGetData