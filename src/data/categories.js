const categories = [
  {
    title: "Covers",
    categoryId: "Covers",
  },
  {
    title: "Charging",
    categoryId: "Charging",
  },
  {
    title: "Accessories",
    categoryId: "Accessories",
  },
  {
    title: "Safety-glasses",
    categoryId: "Safety-glasses",
  },
];


export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  
  ]
}