import { MDBCol, MDBFormInline, MDBIcon } from 'mdbreact'
import { memo } from 'react'
import { CustomInput } from './SearchBox.styled'

const SearchBox = () => {
  return (
    <MDBCol md="9">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <CustomInput className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
  )
}

export default memo(SearchBox)
