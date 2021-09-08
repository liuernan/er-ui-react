// more knowledge: https://github.com/JedWatson/classnames/blob/master/index.js
const classNames = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export default classNames;