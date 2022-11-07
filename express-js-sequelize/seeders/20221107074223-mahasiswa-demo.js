'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Mahasiswas', [
      {
        name: "Fabyan Kindarya",
        age: 21,
        phone_number: "085157766074",
        createdAt: new Date()
      },
      {
        name: "Mario Prasetya Mulya",
        age: 22,
        phone_number: "081336197497",
        createdAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
