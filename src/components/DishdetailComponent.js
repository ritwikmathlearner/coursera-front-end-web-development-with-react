import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export default class Dishdetail extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    renderDish(dish) {
        return <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    }

    renderComments(comments) {
        let commentList = <div>
            {this.props.dish.comments.map((comment, index) => {
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

    render() {
        if(!this.props.dish) return <div></div>

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
    }
}
