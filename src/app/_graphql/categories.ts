export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `
query Categories {
  Categories(limit: 30) {
    docs {
      id
      title
      media {
        id
        width
        height
        alt
        url
      }
    }
  }
}`
