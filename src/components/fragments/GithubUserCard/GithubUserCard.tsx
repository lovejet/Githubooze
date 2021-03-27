import { memo } from 'react'
import { GithubUserCardContainer, AvatarPane, InfoPane, Avatar, UserId, Links, Link } from './GithubUserCard.styled'
import { INTERFACE_USER } from '@helpers/types'
import avatar from '@images/avatar.png'

const GithubUserCard = ({ user }: { user: INTERFACE_USER}) => {
  return (
    <GithubUserCardContainer>
      <AvatarPane>
        {/* <Avatar src={user.avatar_url} /> */}
        <Avatar src={avatar} />
      </AvatarPane>
      <InfoPane>
        <UserId>{user.login}</UserId>
        <Links>
          <Link href={user.url}>Github</Link>
          <Link>Detail</Link>
        </Links>
      </InfoPane>
    </GithubUserCardContainer>
  )
}

export default memo(GithubUserCard)
