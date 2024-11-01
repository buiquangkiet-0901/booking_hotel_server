const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hotel {
    id: ID!
    name: String!
    address: String!
    amenities: [String]
    description: String
  }

  type Room {
    id: ID!
    hotel: Hotel!
    type: String!
    price: Float!
    status: String!
  }

  type Booking {
    id: ID!
    user: User!
    room: Room!
    checkInDate: String!
    checkOutDate: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    contactInfo: String
  }

  type Query {
    hotels: [Hotel]
    rooms(available: Boolean): [Room]
    bookings: [Booking]
    users: [User]
  }

  type Mutation {
  createBooking(userId: ID!, roomId: ID!, checkInDate: String!, checkOutDate: String!): Booking
}

`;

module.exports = typeDefs;
