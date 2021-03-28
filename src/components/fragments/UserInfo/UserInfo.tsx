import Loading from '@components/Loading'
import NoResult from '@components/NoResult'
import Error from '@components/Error'
import { resetUserData, selectUserData } from '@redux-reducers/user-data'
import { useDispatch, useSelector } from 'react-redux'
import BackButtonIcon from '@material-ui/icons/ArrowBack'
import {
  UserInfoContainer,
  BackButtonContainer,
  UserDataContainer,
  LeftPane,
  RightPane,
  Avatar,
  LeftField,
  UserId,
  LeftFieldText,
} from './UserInfo.styled'
import CompanyIcon from '@material-ui/icons/LocationCity'
import LocationIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import BioIcon from '@material-ui/icons/Book'
import avatar from '@images/avatar.png'
import React, { memo } from 'react'

const UserInfo = () => {
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)

  const renderLeftField = (icon: React.ReactNode, text: React.ReactNode) => (
    <LeftField>{icon}<LeftFieldText>{text}</LeftFieldText></LeftField>
  )

  const renderData = () => {
    return (
      <UserDataContainer>
        <LeftPane>
          {/* <Avatar src={user.avatar_url} /> */}
          <Avatar src={avatar} />
          {renderLeftField(null, <UserId>{userData.data?.login}</UserId>)}
          {userData.data?.company && renderLeftField(<CompanyIcon />, userData.data?.company)}
          {userData.data?.location && renderLeftField(<LocationIcon />, userData.data?.location)}
          {userData.data?.email && renderLeftField(<EmailIcon />, userData.data?.email)}
          {userData.data?.bio && renderLeftField(<BioIcon />, userData.data?.bio)}
          {renderLeftField(<BioIcon />, userData.data?.public_repos)}
        </LeftPane>
        <RightPane>
          right
        </RightPane>
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

export default memo(UserInfo)
