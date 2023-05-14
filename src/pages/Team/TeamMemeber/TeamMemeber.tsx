import React from 'react';
import style from './TeamMemeber.module.scss';
import { Paper } from '@mui/material';

type TeamMemeberPropsT = {
  img: string;
  fullName: string;
  position: string;
};

const TeamMemeber = ({ img, fullName, position }: TeamMemeberPropsT) => {
  return (
    <Paper className={style.teamMemeber}>
      <img src={img} className={style.image} />
      <div className={style.text}>
        <h1 className={style.fullName}>{fullName}</h1>
        <h3 className={style.position}>{position}</h3>
      </div>
    </Paper>
  );
};

export default TeamMemeber;
