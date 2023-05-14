import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Team.module.scss';
import Banner from '../../Shared/Banner/Banner';
import TeamMemeber from './TeamMemeber/TeamMemeber';

const Team = () => {
  return (
    <>
      <main className={style.Team}>
        <SubHeader title='Team' />
        <TeamMemeber
          img={require('./assets/memberOne.png')}
          fullName='random Name'
          position='front end'
        />
      </main>
      <Banner />
    </>
  );
};

export default Team;
