import {GET_COUNTRIES } from '../graphQL/queries/getCountries'
import { useQuery } from '@apollo/client';


const useGetCountries=()=>{

    const{loading,error,data}=useQuery(GET_COUNTRIES,{
        fetchPolicy:'cache-and-network'
    })

    const countries = data?.countries?.data || [];
    const count = data?.countries?.count || 0;
    return { loading, error, countries, count };

}

export default useGetCountries;