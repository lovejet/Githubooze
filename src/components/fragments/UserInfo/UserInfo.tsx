import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Error from '@components/Error'
import Loading from '@components/Loading'
import NoResult from '@components/NoResult'
import UserRepoList from '@components/UserRepoList'
import CustomPagination from '@components/CustomPagination'

import { resetUserData, selectUserData } from '@redux-reducers/user-data'

import BackButtonIcon from '@material-ui/icons/ArrowBack'
import CompanyIcon from '@material-ui/icons/Apartment'
import LocationIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import BioIcon from '@material-ui/icons/Book'
import PeopleIcon from '@material-ui/icons/People'
import BlogIcon from '@material-ui/icons/Link'
import TwitterIcon from '@material-ui/icons/Twitter'
import StorageIcon from '@material-ui/icons/Storage'
import AssignmentIcon from '@material-ui/icons/Assignment'
import TimeIcon from '@material-ui/icons/Today'

import {
  UserInfoContainer,
  BackButtonContainer,
  UserDataContainer,
  LeftPane,
  RightPane,
  Avatar,
  SmallField,
  UserName,
  SmallFieldText,
  Link,
  LargeField,
  LargeFieldText,
  InfoPane,
  CountPane,
} from './UserInfo.styled'

const UserInfo = () => {
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)
  const joinedDate = new Date(userData.data?.created_at ?? '')

  const renderSmallField = (icon: React.ReactNode, text: React.ReactNode) => (
    <SmallField>{icon}<SmallFieldText>{text}</SmallFieldText></SmallField>
  )

  const renderLargeField = (icon: React.ReactNode, text: React.ReactNode) => (
    <LargeField>{icon}<LargeFieldText>{text}</LargeFieldText></LargeField>
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
          {renderSmallField(null, <><UserName>{userData.data?.name}</UserName>{userData.data?.login}</>)}
          {userData.data?.bio
            && renderSmallField(<BioIcon fontSize="small" />, userData.data?.bio)}
          {renderSmallField(<PeopleIcon fontSize="small" />, <>{userData.data?.followers} follower &middot; {userData.data?.following} following</>)}

          {userData.data?.company
            && renderSmallField(
                <CompanyIcon fontSize="small" />,
                userData.data?.company
              )}
          {userData.data?.location
            && renderSmallField(
                <LocationIcon fontSize="small" />, 
                userData.data?.location
              )}
          {userData.data?.email
            && renderSmallField(
                <EmailIcon fontSize="small" />, 
                userData.data?.email
              )}
          {userData.data?.blog
            && renderSmallField(
                <BlogIcon fontSize="small" />, 
                <Link href={userData.data?.blog}>{userData.data?.blog}</Link>
              )}
          {userData.data?.twitter_username
            && renderSmallField(
                <TwitterIcon fontSize="small" />,
                <Link href={`https://twitter.com/${userData.data?.twitter_username}`}>@{userData.data?.twitter_username}</Link>
              )}
          {userData.data?.created_at
            && renderSmallField(
                <TimeIcon fontSize="small" />, 
                `Joined at ${joinedDate.getMonth()}/${joinedDate.getDay()}/${joinedDate.getFullYear()}`
              )}
        </LeftPane>
        <RightPane>
          <InfoPane>
            <CountPane>
              {renderLargeField(
                <StorageIcon />,
                `${userData.data?.public_repos} repos`
              )}
              {renderLargeField(
                <AssignmentIcon />,
                `${userData.data?.public_gists} gists`
              )}
            </CountPane>
            {/* {renderLargeField(
              <StarIcon />,
              `${userData.stars} stars`
            )} */}
            <CustomPagination type="repos" pages={Math.min(Math.ceil((userData.data?.public_repos || 0) / 100), 100)}/>
          </InfoPane>
          <UserRepoList user={userData.data?.login} />
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
