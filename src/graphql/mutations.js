/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
