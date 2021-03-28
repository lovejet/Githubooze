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
  UserName,
  LeftFieldText,
  Link,
} from './UserInfo.styled'
import CompanyIcon from '@material-ui/icons/Apartment'
import LocationIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import BioIcon from '@material-ui/icons/Book'
import PeopleIcon from '@material-ui/icons/People'
import BlogIcon from '@material-ui/icons/Link'
import TwitterIcon from '@material-ui/icons/Twitter'
import React, { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
          <Avatar>
            <LazyLoadImage
              src={userData.data?.avatar_url}
              width="100%"
              height="100%"
              placeholderSrc="/images/avatar.png"
            />
          </Avatar>
          {renderLeftField(null, <><UserName>{userData.data?.name}</UserName>{userData.data?.login}</>)}
          {userData.data?.bio
            && renderLeftField(<BioIcon fontSize="small" />, userData.data?.bio)}
          {renderLeftField(<PeopleIcon fontSize="small" />, <>{userData.data?.followers} follower &middot; {userData.data?.following} following</>)}

          {userData.data?.company
            && renderLeftField(
                <CompanyIcon fontSize="small" />,
                userData.data?.company
              )}
          {userData.data?.location
            && renderLeftField(
                <LocationIcon fontSize="small" />, 
                userData.data?.location
              )}
          {userData.data?.email
            && renderLeftField(
                <EmailIcon fontSize="small" />, 
                userData.data?.email
              )}
          {userData.data?.blog
            && renderLeftField(
                <BlogIcon fontSize="small" />, 
                <Link href={userData.data?.blog}>{userData.data?.blog}</Link>
              )}
          {userData.data?.twitter_username
            && renderLeftField(
                <TwitterIcon fontSize="small" />,
                <Link href={`https://twitter.com/${userData.data?.twitter_username}`}>@{userData.data?.twitter_username}</Link>
              )}
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
