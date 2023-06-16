import style from './Required.module.scss';

const Required = ({ text }: { text: string }) => {
  return (
    <div className={style.content}>
      <p>{text}</p>
      <p className={style.Required}>*</p>
    </div>
  );
};

export default Required;
