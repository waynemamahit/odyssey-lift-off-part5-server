const { readFileSync } = require('fs')
const { gql } = require('apollo-server');

const schema = readFileSync(require.resolve('./graphql/schema.gql')).toString('utf-8')
const mutation = readFileSync(require.resolve('./graphql/mutation.gql')).toString('utf-8')

module.exports = gql`${schema}${mutation}`;
