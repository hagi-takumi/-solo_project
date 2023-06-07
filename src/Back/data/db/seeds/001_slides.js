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
        "https://pixabay.com/get/g1b383b41126a287f8de57b222b4551b3fd2fb76c9bd9ce33824a7ae3676953d8657b7cd31d63bf1454e6beed31aa05cd62dcf899b286568a96ecbdcf810a1493_1280.jpg",
        "https://pixabay.com/get/g4728d11c1386ebe40ee6cd1a356d5361ab9dd1376b8769d466eb8add909dbfa7dfab04d16463b3e3e29fb0dc86d2ae88bae5410f6b5562188572bc714e194673_1280.jpg",
        "https://pixabay.com/get/g663a9f180f349e3beaeeec37eee36eac5a3b47b837066406d419ddf978f90f4287e37ba39e68f1088b50abe7d40097ba3bc92dc3706d2dcfa33f3bbed7d5b49d_1280.jpg",
        "https://pixabay.com/get/gcc8ce04ede4101469647f34e724b176649b1e5a715b6f579d813295776e49c02ee480ed43436b2bf82f375fd45a8f2b65a3544059d52b561a905d2a75d22612b_1280.jpg",
        "https://pixabay.com/get/g15d9b9ccb0120dbb28fd491a2acb6d6c881a86db983bff22dd76c9cd6eede936cf545a65a8ffcb01ddafbcec730819bb629ad677bcd254a0b036cbae9c1021d7_1280.jpg",
      ],
      make_date: "1996-02-12",
    },
  ]);
};
