import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';

const RenderDish = ({ dish }) => {
    return <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
}

const RenderComments = ({ comments }) => {
    let commentList = <div>
        {comments.map((comment, index) => {
            return <div key={index} tag="li" className="my-1">
                <p>{comment.comment}</p>
                <p>--- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </div>
        })}
    </div>

    return <>
        <h4>Comments</h4> {commentList}
    </>
}

const Dishdetail = ({ dish, comments }) => {
    if (!dish) return <div></div>

    return (
        <div className="container">
            <div className="row">
            <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            { dish.name }
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3> {dish.menu}</h3>
                        <hr />
                    </div>
            </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={comments} />
            </div>
        </div>
        </div>
    )
}

export default Dishdetail