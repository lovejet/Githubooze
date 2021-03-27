import { memo } from 'react'
import { GithubUserCardContainer, AvatarPane, InfoPane, Avatar, UserId, Links, Link } from './GithubUserCard.styled'
import { INTERFACE_USER } from '@helpers/types'
import avatar from '@images/avatar.png'
import { useDispatch } from 'react-redux'
import { fetchUserData } from '@redux-reducers/user-data'

const GithubUserCard = ({ user }: { user: INTERFACE_USER}) => {
  const dispatch = useDispatch()
  const onClickDetail = () => {
    dispatch(fetchUserData(user.url))
  }
  return (
    <GithubUserCardContainer>
      <AvatarPane>
        {/* <Avatar src={user.avatar_url} /> */}
        <Avatar src={avatar} />
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
