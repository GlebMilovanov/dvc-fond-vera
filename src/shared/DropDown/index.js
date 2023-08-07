import styles from './DropDown.module.css';

export const DropDown = ({
  label,
  name,
  optionsGenerator,
  onChange,
  value,
}) => {
  return (
    <div className={styles.selectGroup}>
      <label className={styles.selectName} htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={styles.options}
        onChange={onChange}
        value={value}
      >
        {optionsGenerator().map((option, idx) => (
          <option value={option.value} key={idx} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
