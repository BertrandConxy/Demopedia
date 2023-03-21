import Country from "../models/country.js";
import { seed } from "./seed.js";

const seedDb = async () => {
    await Country.deleteMany({});
    await Country.insertMany(seed);
};

export default seedDb;