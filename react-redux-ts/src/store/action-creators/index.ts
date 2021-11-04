import * as UserActionCreators from './usersAction'
import * as TodoActionCreators from './todoAction'

export default {
    ...UserActionCreators,
    ...TodoActionCreators
}