import React from 'react';
import style from './Plan.module.scss';
import PlanElem from './PlanElem/PlanElem';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Plan = () => {
  return (
    <div className={style.Plan}>
      <h2 className={style.subTitle}>Plan your day now</h2>
      <h1 className={style.Title}>Quick & easy with Our PC Club</h1>
      <div className={style.Content}>
        <PlanElem
          title='Select CPU'
          subTitle='We offer a big range of CPUs for all your needs. We have the perfect CPU to meet your needs'
        >
          <SelectAllIcon sx={{ fontSize: '10rem', color: '#ff4d30' }} />
        </PlanElem>
        <PlanElem
          title='Contact Us'
          subTitle='Our knowledgeable and friendly operators are always ready to help with any questions or concerns'
        >
          <SupportAgentIcon sx={{ fontSize: '10rem', color: '#ff4d30' }} />
        </PlanElem>

        <PlanElem
          title='Select GPU'
          subTitle='We offers a big range of GPUs for all your needs. We have the perfect GPU to meet your needs'
        >
          <SelectAllIcon sx={{ fontSize: '10rem', color: '#ff4d30' }} />
        </PlanElem>
      </div>
    </div>
  );
};

export default Plan;
