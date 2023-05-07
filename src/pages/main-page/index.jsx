import { Col, Row } from "react-bootstrap"
import CategoryBox from "./components/category-box"
import { useSelector } from "react-redux"

export default function MainPage() {
    const categoryState = useSelector((state)=> state.categoryState)
    return <>

        <h2>Kategoriler</h2>
        <hr />
        <Row>
            {categoryState.categories.map((item,index) => {
                
               return <Col lg="3" sm="6" key={index}> <CategoryBox category ={item} /></Col>
            })}
        </Row>
    </>
}