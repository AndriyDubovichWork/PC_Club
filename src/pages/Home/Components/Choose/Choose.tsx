import React from 'react';
import style from './Choose.module.scss';
import ChooseElem from './ChooseElem/ChooseElem';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Button from '../../../../Styled/Button/Button';

const Choose = ({
  GreetingRef,
  scrollToElement,
}: {
  GreetingRef: React.MutableRefObject<null>;
  scrollToElement: (ref: React.MutableRefObject<null>) => void;
}) => {
  return (
    <div className={style.Choose}>
      <div className={style.Left}>
        <h3 className={style.WhyUs}>Why Choose Us</h3>
        <h1 className={style.Title}>Best valued deals you will ever find</h1>
        <h5 className={style.SubTitle}>
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big.
        </h5>
        <div style={{ margin: '2vh 0' }}>
          <Button onClick={() => scrollToElement(GreetingRef)}>
            Find Details
          </Button>
        </div>
      </div>
      <div className={style.Right}>
        <ChooseElem
          title='All day rent'
          subTitle='Get Your PC for whole day and transparent price with our all-inclusive pricing policy.'
        >
          <AccessTimeIcon sx={{ fontSize: '5vw', color: '#ff4d30' }} />
        </ChooseElem>
        <ChooseElem
          title='All Inclusive Pricing'
          subTitle='Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.'
        >
          <AttachMoneyIcon sx={{ fontSize: '5vw', color: '#ff4d30' }} />
        </ChooseElem>
        <ChooseElem
          title='No Hidden Charges'
          subTitle='Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.'
        >
          <PaidIcon sx={{ fontSize: '5vw', color: '#ff4d30' }} />
        </ChooseElem>
      </div>
    </div>
  );
};

export default Choose;
