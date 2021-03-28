import { memo, useState } from 'react'
import { GithubUserCardContainer, AvatarPane, InfoPane, UserId, Links, Link, ImagePlaceHolderContainer } from './GithubUserCard.styled'
import { INTERFACE_USER } from '@helpers/types'
// import avatar from '@images/avatar.png'
import { useDispatch } from 'react-redux'
import { fetchUserData } from '@redux-reducers/user-data'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImagePlaceHolder = () => (
  <ImagePlaceHolderContainer>
    Avatar
  </ImagePlaceHolderContainer>
)

const GithubUserCard = ({ user }: { user: INTERFACE_USER}) => {
  const dispatch = useDispatch()
  const onClickDetail = () => {
    dispatch(fetchUserData(user.url))
  }
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <GithubUserCardContainer>
      <AvatarPane>
        {!imageLoaded && <ImagePlaceHolder />}
        {
          <LazyLoadImage
            hidden={!imageLoaded}
            src={user.avatar_url}
            width="100%"
            height="100%"
            afterLoad={() => setImageLoaded(true)}
          />
        }
        {/* <Avatar src={avatar} /> */}
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
