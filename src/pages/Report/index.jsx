import React, { useState } from 'react'
import Button from '../../components/Button'
import CustomLink from '../../components/CustomLink'
import Divider from '../../components/Divider'
import Modal from '../../components/Modal'
// layout
import dashboardLayout from '../../layouts/DashboardPages'
import { PATHS } from '../../routes'
import ReportLink from './components/ReportLink'
import Style from './style'

const Report = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        title={"Customize report"}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, doloribus?
      </Modal>
      <Style>
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
    </>
  )
}

export default dashboardLayout(Report)