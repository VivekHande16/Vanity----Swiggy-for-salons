module.exports = async (payload, context, t, repository) => {
  const { salonRepository } = repository;
  const salons = await salonRepository.salonGet(payload, t);
  return salons;
};
