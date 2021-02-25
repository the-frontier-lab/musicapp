import * as instrumentsAPI from "./instrumentGeneratorService";

const profiles = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Teacher",
    instrument: { _id: "5b21ca3eeb7f6fbccd471818", name: "Violin" },
    email: "test@test.com",
    username: "teacher",
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  
];

export function getProfiles() {
  return profiles;
}

export function getProfile(id) {
  return profiles.find(p=> p._id === id);
}

export function saveProfile(profile) {
  let profileInDb = profiles.find(p => p._id === profile._id) || {};
  profileInDb.name = profile.name;
  profileInDb.instrument = instrumentsAPI.instruments.find(i => i._id === profile.instrumentId);
  profileInDb.email= profile.email;
  profileInDb.username = profile.username;

  if (!profileInDb._id) {
    profileInDb._id = Date.now().toString();
    profile.push(profileInDb);
  }

  return profileInDb;
}

