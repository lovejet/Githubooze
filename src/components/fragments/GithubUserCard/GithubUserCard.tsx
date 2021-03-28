import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { INTERFACE_USER } from '@helpers/types'

import { fetchUserData } from '@redux-reducers/user-data'
import { reseRepoList } from '@redux-reducers/repo-list'

import { GithubUserCardContainer, AvatarPane, InfoPane, UserId, Links, Link } from './GithubUserCard.styled'

const GithubUserCard = ({ user }: { user: INTERFACE_USER}) => {
  const dispatch = useDispatch()
  const onClickDetail = () => {
    dispatch(reseRepoList())
    dispatch(fetchUserData(user.url))
  }

  return (
    <GithubUserCardContainer>
      <AvatarPane>
        <LazyLoadImage
          src={user.avatar_url}
          width="100%"
          height="100%"
          placeholderSrc="/images/avatar.png"
        />
      </AvatarPane>
      <InfoPane>
        <UserId>{user.login}</UserId>
        <Links>
          <Link href={user.html_url}>Github</Link>
          <Link onClick={onClickDetail}>Detail</Link>
        </Links>
      </InfoPane>
    </GithubUserCardContainer>
  )
}

export default memo(GithubUserCard)
