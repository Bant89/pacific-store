/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore {
    onCreateStore {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore {
    onUpdateStore {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore {
    onDeleteStore {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
