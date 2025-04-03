const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create Users, Places and Vacations

  const creatUsers = async () => {
    const users = [
        { name: "Billy" }, 
        { name: "Jon" }, 
        { name: "Sarah" }, 
        { name: "Lisa" }];
    await prisma.user.createMany({ data: users });
  };

  const createPlaces = async () => {
    const places = [
        {name: "Tokyo"},
        {name: "Osaka"},
        {name: "Kyoto"},
        {name: "Sapporo"},
    ]
    await prisma.place.createMany({ data: places })
  };

  const createVacations = async () => {
    const vacations = [
        {userId: 1, placeId: 1, travelDate: new Date("2025-07-01")},
        {userId: 2, placeId: 2, travelDate: new Date("2025-07-01")},
        {userId: 3, placeId: 3, travelDate: new Date("2025-07-01")},
        {userId: 4, placeId: 4, travelDate: new Date("2025-07-01")},
    ]
    await prisma.vacation.createMany({ data: vacations })
  };
  await creatUsers()
  await createPlaces()
  await createVacations()
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
