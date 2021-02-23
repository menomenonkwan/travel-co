import faker from 'faker';

const formatPrice = (cents) => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

const generateReviewer = () => {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    image: faker.image.people(250,200,true),
    desc: faker.lorem.sentences(4),
  };
};

export { formatPrice, generateReviewer };