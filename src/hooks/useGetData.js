import { useEffect, useState } from "react";
import getFetch from "../services/GetData/getFetch.js";

const useGetData = (id = 0) => {

    console.log("id "+ id)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch(id)
            .then(res => {
                setData(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('GetData Finalizada');
            });

        return () => {
            setLoading(true)
        }
    }, [id])

    return [data, loading]
}

export default useGetData