import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap';
class DishDetail extends Component{
    formatDate(date) {
        var options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(date).toLocaleDateString([], options);
      }
    renderComments(comments){
        const cmnts=comments.map((comment)=>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, &nbsp; 
                    {this.formatDate(comment.date)}
                    </p>
                </li>
            )
        })
        if(comments==null)
        return(<div></div>)
        else
        return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmnts}
                    </ul>
                    </Card>
                </div>
        )
    }
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }
    render(){
        const dish=this.props.dish
        if(dish==null){
            return(<div></div>);
        }
        else 
        return(
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
        );
    }
}
export default DishDetail;