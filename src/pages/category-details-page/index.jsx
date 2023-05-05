
import { useParams } from "react-router-dom"

export default function CategoryDetailPage (){
    const params = useParams()
    
    return <> 
    <div>burası kategory detay sayfası</div>
    <pre>{JSON.stringify(params, null, 2)}</pre>
    </>
    }
