import prisma from "../src/database";

const main = async () => {
  await prisma.car.createMany({
    data: [
      {
        brand: "Audi",
        model: "A3",
        year: 2019,
        name: "black",
        image: "https://i.ytimg.com/vi/vZz-z7yq5yM/maxresdefault.jpg",
      },
      {
        brand: "Audi",
        model: "A3",
        year: 2019,
        name: "black",
        image: "https://i.ytimg.com/vi/vZz-z7yq5yM/maxresdefault.jpg",
      },
      {
        brand: "Audi",
        model: "A3",
        year: 2019,
        name: "black",
        image: "https://i.ytimg.com/vi/vZz-z7yq5yM/maxresdefault.jpg",
      },
      {
        brand: "Audi",
        model: "A3",
        year: 2019,
        name: "black",
        image: "https://i.ytimg.com/vi/vZz-z7yq5yM/maxresdefault.jpg",
      },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
