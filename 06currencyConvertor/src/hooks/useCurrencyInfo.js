import { useEffect, useState } from "react";


function useCurrencyInfo(currency)
{
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(() => res.json())
        .then((res) => setData(res[USD]))
    }, [])
}