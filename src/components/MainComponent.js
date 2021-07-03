import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            selectedDish: null
        }
    }

    onDishSelect = (dishId) => {
        this.setState({ selectedDish: dishId })
    }


    render() {
        const HomePage = () => <Home
            dish={this.state.dishes.find(dish => dish.featured)}
            promotion={this.state.promotions.find(promotion => promotion.featured)}
            leader={this.state.leaders.find(leader => leader.featured)}
        />

        const DishWithId = ({ match }) => {
            return (
                <Dishdetail
                    dish={this.state.dishes.find((dish) => dish.id === parseInt(match.params.dishId, 10))}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        };

        const AboutUsPage = () => {
            return (
                <About
                    leaders={this.state.leaders}
                />
            );
        };



        return (
            <div className="App">
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/"><HomePage /></Route>
                        <Route exact path="/menu">
                            <Menu dishes={this.state.dishes} />
                        </Route>
                        <Route exact path="/menu/:dishId" component={DishWithId}></Route>
                        <Route exact path="/contactus">
                            <Contact />
                        </Route>
                        <Route exact path="/aboutus" component={AboutUsPage} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
