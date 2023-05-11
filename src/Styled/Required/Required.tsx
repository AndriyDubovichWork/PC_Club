import style from './Required.module.scss';

const Required = ({ text }: { text: string }) => {
  return (
    <>
      <p>{text}</p>
      <p className={style.Required}>*</p>
    </>
  );
};

export default Required;
