/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("slides").del();
  await knex("slides").insert([
    {
      title: "はなについて",
      img_list: [
        "https://pixabay.com/get/g0deb738eee5019133524994d360010b704ebceb0c77f758a467c31870d70e9f8dd10baf2c58ff75eafcd5a175975cc5e49cbd321fc5c56b81cf87db7c1440f65_1280.jpg",
        "https://pixabay.com/get/g0deb738eee5019133524994d360010b704ebceb0c77f758a467c31870d70e9f8dd10baf2c58ff75eafcd5a175975cc5e49cbd321fc5c56b81cf87db7c1440f65_1280.jpg",
        "https://pixabay.com/get/g0deb738eee5019133524994d360010b704ebceb0c77f758a467c31870d70e9f8dd10baf2c58ff75eafcd5a175975cc5e49cbd321fc5c56b81cf87db7c1440f65_1280.jpg",
        "https://pixabay.com/get/g0deb738eee5019133524994d360010b704ebceb0c77f758a467c31870d70e9f8dd10baf2c58ff75eafcd5a175975cc5e49cbd321fc5c56b81cf87db7c1440f65_1280.jpg",
        "https://pixabay.com/get/g0deb738eee5019133524994d360010b704ebceb0c77f758a467c31870d70e9f8dd10baf2c58ff75eafcd5a175975cc5e49cbd321fc5c56b81cf87db7c1440f65_1280.jpg",
      ],
      make_date: "1996-02-12",
    },
  ]);
};
