import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom'

const RenderMenuItem = ({ dish }) => (
    <Card>
        <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>
)

const Menu = ({ dishes }) => {
    const menu = dishes.map(dish =>
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} />
        </div>
    )

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Menu