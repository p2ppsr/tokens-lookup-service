const makeMigrations = ({ tablePrefix }) => ([{
    up: async knex => {
      await knex.schema.createTable(`${tablePrefix}tokens`, table => {
        table.increments('keyID', options={primaryKey: true})
        table.string('txid')
        table.integer('vout')
        table.integer('amount')
        table.string('ownerKey')
      })
    },
    down: async knex => {
      await knex.schema.dropTable(`${tablePrefix}tokens`)
    }
  }])
  module.exports = makeMigrations
