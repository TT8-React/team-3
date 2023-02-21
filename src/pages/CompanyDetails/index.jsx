import React from 'react'
import Button from '../../components/Button'
import CustomLink from '../../components/CustomLink'
import { Body2, H5 } from '../../components/Typography'
// layout
import dashboardLayout from '../../layouts/DashboardPages'
import { PATHS } from '../../routes'
import OneDetail from './OneDetail'
import Style from './style'

const CompanyDetails = () => {
  return (
    <Style>
      <div className="back_container">
        <CustomLink to={PATHS.PROFILE_DETAILS}>
          <Button>
            Edit company details
          </Button>
        </CustomLink>
      </div>

      <div className="details">
        <OneDetail title="Name" desc="Lorem ipsum" className='one-detail'/>
        <OneDetail title="test1" desc="Lorem ipsum" className='one-detail'/>
        <OneDetail title="test2" desc="Lorem ipsum" className='one-detail'/>
        <OneDetail title="test3" desc="Lorem ipsum" className='one-detail'/>
        <OneDetail title="test4" desc="Lorem ipsum" className='one-detail'/>
        <OneDetail title="test5" desc="Lorem ipsum" className='one-detail'/>
        <OneDetail title="test6" desc="Lorem ipsum" className='one-detail'/>
      </div>
    </Style>
  )
}

export default dashboardLayout(CompanyDetails)