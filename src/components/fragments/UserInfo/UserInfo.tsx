import Loading from '@components/Loading'
import NoResult from '@components/NoResult'
import Error from '@components/Error'
import { resetUserData, selectUserData } from '@redux-reducers/user-data'
import { useDispatch, useSelector } from 'react-redux'
import BackButtonIcon from '@material-ui/icons/ArrowBack'
import { UserInfoContainer, BackButtonContainer, UserDataContainer } from './UserInfo.styled'

const UserInfo = () => {
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)

  const renderData = () => {
    return (
      <UserDataContainer>
        User Data
      </UserDataContainer>
    )
  }

  const renderChild = () => {
    if (userData.status === 'loading') return <Loading />
    if (userData.error) return <Error />
    if (userData.data === null) return <NoResult />
    return renderData()
  }

  const onClickBack = () => {
    dispatch(resetUserData())
  }

  return (
    <UserInfoContainer>
      <BackButtonContainer onClick={onClickBack}>
        <BackButtonIcon />
      </BackButtonContainer>
      {renderChild()}
    </UserInfoContainer>
  )
}

export default UserInfo
