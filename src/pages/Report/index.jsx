import React, { useState } from 'react'
import Button from '../../components/Button'
import CustomLink from '../../components/CustomLink'
import Divider from '../../components/Divider'
import LabelInput from '../../components/LabelInput'
import Modal from '../../components/Modal'
// layout
import dashboardLayout from '../../layouts/DashboardPages'
import { PATHS } from '../../routes'
import ReportLink from './components/ReportLink'
import Style from './style'

const Report = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Style>
      <Modal
        title={"Customize report"}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />

      <div className="back_container">
        <CustomLink to={PATHS.REPORT_EDIT}>
          <Button>
            Create report
          </Button>
        </CustomLink>
      </div>
      <Divider />
      <div className="links">
        <ReportLink name="SEBI report" to={PATHS.REPORT_SEBI} />
        <ReportLink name="GRI report" to={PATHS.REPORT_GRI} />
        <ReportLink name="Customize report" onClick={() => setIsModalOpen(true)} />
      </div>
    </Style>

  )
}

export default dashboardLayout(Report)