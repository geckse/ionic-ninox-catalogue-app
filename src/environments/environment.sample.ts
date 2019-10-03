// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ninoxAPI: 'https://api.ninoxdb.de/v1/',
  ninoxAPIKey: 'top secret',
  ninoxTeamId: 'some id',
  ninoxDatabaseId: 'another id'
};

/*
  WARNING: As this is just a Proof of Concept handling the API-Key that way is _NOT SAFE_ for production!
  As it's part of your compiled code this could expose your Ninox-API-Key if you upload or provide the app anywhere public.
  As uploaded bundle everone could inspect the code. As compiled app it's pretty easy to reverse-engineer the app bundle.
*/
