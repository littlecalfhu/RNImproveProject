/**
 * Created by huyifan on 2017/6/29.
 */
import * as loginActions from './login'
import * as sagaActions from './sagaActions'
export default {
    ...loginActions,
    ...sagaActions
};