import { useState, useEffect } from 'react';

interface IFetchParams {
    method: 'POST' | 'PATCH' | 'PUT'
    // headers?: string,
    body?: string
}


export const useFetch = (url: string = '', id = null, params: IFetchParams | {} = {}) => {
    const [fetchParams, setFetchParams] = useState<IFetchParams | {}>(params)
    const [fetchUrl, setFetchUrl] = useState<string>(url)
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined)

    const changeParams = (url: string, params: IFetchParams) => {
        setFetchParams({ ...fetchParams, ...params })
        setFetchUrl(url)
    }

    // console.log( fetchParams, fetchUrl)

    useEffect(() => {
        fetchUrl.length && setLoading(true)
        setResponse(null)
        setError(null)
        setIsSuccess(undefined)


        const fetchData = async () => {

            // !!fetchUrl.length && (

            await fetch(fetchUrl, fetchParams)
                .then(response => {

                    return response.json()
                })
                .then(data => {
                    console.log(data, 'DATA')
                    setResponse(data)
                    setLoading(false)
                    setIsSuccess(true)
                })
                .catch(error => {
                    console.error(error)
                    setError(error)
                    setLoading(false)
                    setIsSuccess(false)
                })
            // )
        }

        !!fetchUrl.length && fetchData()

    }, [fetchUrl])

    return { response, loading, error, isSuccess, changeParams }
}

