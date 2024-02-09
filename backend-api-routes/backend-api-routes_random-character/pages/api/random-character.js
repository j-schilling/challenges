import Chance from "chance";

export default function handler(request, response) {
  const chance = Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };

  response.status(200).json(character);
}
