export default function wrap(func) {
  return (...args) => {
    func(...args)
      .catch((err) => {
        console.error('async function error: ', err);
      });
  };
}
