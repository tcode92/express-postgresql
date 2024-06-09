const assert = require("assert");
async function test() {
  // test post request to /login
  const loginRes = await fetch("http://localhost:3000/login", {
    method: "POST",
  });
  const login = await loginRes.json();
  assert.deepEqual(
    login,
    [
      {
        id: 2,
        username: "username2",
        password: "dfjdslf",
      },
    ],
    "Login test failed."
  );

  // test get request to /playlists
  const playlistsRes = await fetch("http://localhost:3000/playlists");
  const playlists = await playlistsRes.json();
  assert.deepEqual(
    playlists,
    [
      {
        id: 1,
        title: "playlist1",
        creator_id: 1,
      },
      {
        id: 2,
        title: "playlist2",
        creator_id: 2,
      },
      {
        id: 3,
        title: "playlist3",
        creator_id: 3,
      },
    ],
    "Playlists test failed."
  );
}
test();
