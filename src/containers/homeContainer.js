/**
 * Created by huyifan on 2017/7/10.
 */
import {connect} from 'react-redux'
import Home from '../pages/home'
import {bindActionCreators} from 'redux'
export class HomeContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Home actions={this.props.actions} home={this.props.home}/>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        home : state.get('home')
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        actions : bindActionCreators(Actions,dispatch)
    }
};
connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
