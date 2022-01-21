export const getServiceTypes = async () => {
  return fetch('http://localhost:3000/services/')
    .then(res => res.json())
    .then(services => {
      const types = new Set();
      services.forEach(service => types.add(service.type));
      return types;
    });
};