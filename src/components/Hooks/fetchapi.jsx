
export function useFetchApi(){
     const [data,setData]=useState([])
     
     useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data)
        })
     },[url])
   return data;
}

