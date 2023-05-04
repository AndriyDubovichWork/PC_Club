import React from 'react';
import style from './Pros.module.scss';
import ProsElem from './ProsElem/ProsElem';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Pros = () => {
  return (
    <div className={style.Pros}>
      <h2 className={style.subTitle}>Plan your day now</h2>
      <h1 className={style.Title}>Quick & easy with Our PC Club</h1>
      <div className={style.Content}>
        <ProsElem
          title='Select CPU'
          subTitle='We offer a big range of CPUs for all your needs. We have the perfect CPU to meet your needs'
        >
          <SelectAllIcon sx={{ fontSize: '10rem', color: '#ff4d30' }} />
        </ProsElem>
        <ProsElem
          title='Contact Us'
          subTitle='Our knowledgeable and friendly operators are always ready to help with any questions or concerns'
        >
          <SupportAgentIcon sx={{ fontSize: '10rem', color: '#ff4d30' }} />
        </ProsElem>

        <ProsElem
          title='Select GPU'
          subTitle='We offers a big range of GPUs for all your needs. We have the perfect GPU to meet your needs'
        >
          <SelectAllIcon sx={{ fontSize: '10rem', color: '#ff4d30' }} />
        </ProsElem>
      </div>
    </div>
  );
};

export default Pros;
