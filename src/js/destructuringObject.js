const destructuringObject = ({ special }) => {
  const result = special.map((item) => {
    const { description = 'Описание недоступно', ...data } = item;
    return { ...data, description };
  });
  return result;
};

export default destructuringObject;
