import { Link } from "react-router-dom"
import Style from "./category-box.module.css"

export default function CategoryBox(probs) {

    console.log('probs.category.name', probs)
    return (
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal text-start">{probs.category.name}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{probs.category.id}<small class="text-muted fw-light">/{probs.category.status}</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        {/* <li> {probs.category.created_at}</li>
                        <li>{probs.category.description}</li> */}
                        <li><img className={Style.category_image} src={probs.category.image}></img></li>
                        <li>{probs.category.updated_at }</li>
                    </ul>
                    <Link to={"/category/details/" + probs.category.slug} type="Link" class="w-100 btn btn-lg btn-primary">Detaylar</Link>
                </div>
            </div>
        </div>
    )
}