/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      name
      description
      products {
        items {
          id
          title
          storeID
          description
          price
          quantity
        }
        nextToken
      }
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      storeID
      description
      price
      quantity
      store {
        id
        name
        description
        products {
          nextToken
        }
      }
      reviews {
        items {
          id
          productID
          content
          rating
        }
        nextToken
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        storeID
        description
        price
        quantity
        store {
          id
          name
          description
        }
        reviews {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      productID
      product {
        id
        title
        storeID
        description
        price
        quantity
        store {
          id
          name
          description
        }
        reviews {
          nextToken
        }
      }
      content
      rating
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        product {
          id
          title
          storeID
          description
          price
          quantity
        }
        content
        rating
      }
      nextToken
    }
  }
`;
