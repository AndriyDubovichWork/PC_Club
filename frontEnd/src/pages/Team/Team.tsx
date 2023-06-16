import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Team.module.scss';
import Banner from '../../Shared/Banner/Banner';
import TeamMemeber from './TeamMemeber/TeamMemeber';

const Team = () => {
  const team = [
    {
      img: require('./assets/memberOne.png'),
      fullName: 'Luke Miller',
      position: 'Salesman',
    },
    {
      img: require('./assets/memberTwo.png'),
      fullName: 'Michael Diaz',
      position: 'PC Expert',
    },
    {
      img: require('./assets/memberThree.png'),
      fullName: 'Briana Ross',
      position: 'Photographer',
    },
  ];
  return (
    <>
      <main className={style.Team}>
        <SubHeader title='Team' />
        <div className={style.TeamContainer}>
          {team.map((member) => (
            <TeamMemeber {...member} key={member.fullName} />
          ))}
        </div>
      </main>
      <Banner />
    </>
  );
};

export default Team;
