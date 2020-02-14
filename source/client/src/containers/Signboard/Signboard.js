import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchSingboard } from '../../store/actions/singboardActions';
import {
    Card, Button, CardImg, 
    CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

class Signboard extends Component {
    componentDidMount() {
        this.props.fetchSingboard()
    }

    renderItem(items) {
        return items.map(item => {
            const {summary, description} = item;
            return (
                <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{summary}</CardTitle>
                        <CardText>{description}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            )
        })
    }
    render() {

        const items = this.renderItem(this.props.singboards)
        return (
            // <CardColumns>
            <div>
                {items}
            </div>
                
            // </CardColumns>
        )
    }
}

const mapStateToProps = state => ({
    singboards: state.singboards.singboards
})

const mapDispatchToProps = dispatch => ({
    fetchSingboard: () => dispatch(fetchSingboard())
})


export default connect(mapStateToProps, mapDispatchToProps)(Signboard);